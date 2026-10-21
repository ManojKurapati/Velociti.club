"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./ui/section";
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";

export function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Autoplay by default
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
    triggerControlsVisibility();
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
    triggerControlsVisibility();
  };

  const handleFullscreenToggle = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
    triggerControlsVisibility();
  };

  const formatTime = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const triggerControlsVisibility = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="showreel" className="border-t border-line">
      <div className="mx-auto max-w-7xl border-x border-line">
        <SectionHeader title="See Velociti at work" description="A short look at how we deploy AI agents inside client operations." />
        <div className="border-t border-line p-2 md:p-3">

        {/* Video Player Container */}
        <motion.div
          ref={containerRef}
          onMouseMove={triggerControlsVisibility}
          onMouseLeave={() => isPlaying && setShowControls(false)}
          className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface border border-line group"
        >

          {/* Video element */}
          <video
            ref={videoRef}
            src="/Velociti.mp4"
            className="w-full h-full object-cover"
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onClick={handlePlayPause}
            onEnded={() => {
              setIsPlaying(false);
              setShowControls(true);
            }}
          />

          {/* Dark overlay when controls are visible or paused */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 transition-opacity duration-300 pointer-events-none ${
              !isPlaying || showControls ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Play/Pause Center Button (Only shows when paused or on hover) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <AnimatePresence>
              {(!isPlaying || showControls) && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handlePlayPause}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-black/60 hover:bg-white text-white hover:text-black border border-line-strong hover:border-white flex items-center justify-center backdrop-blur-md transition-all duration-300 pointer-events-auto cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.5)] active:scale-95"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" />
                  ) : (
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" fill="currentColor" />
                  )}
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Custom Controls Bar */}
          <div 
            className={`absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col gap-3 transition-all duration-300 z-20 ${
              !isPlaying || showControls ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
            }`}
          >
            {/* Progress Slider */}
            <div className="flex items-center gap-3 w-full">
              <span className="text-xs tabular-nums text-gray-300 select-none">{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1 bg-white/20 hover:bg-white/30 rounded-lg appearance-none cursor-pointer accent-neon-cyan transition-colors"
                style={{
                  background: `linear-gradient(to right, #CBB08A 0%, #CBB08A ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.2) ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
              <span className="text-xs tabular-nums text-gray-300 select-none">{formatTime(duration)}</span>
            </div>

            {/* Buttons Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Play/Pause */}
                <button
                  onClick={handlePlayPause}
                  className="text-white hover:text-cool-gray-300 transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>

                {/* Mute/Unmute */}
                <button
                  onClick={handleMuteToggle}
                  className="text-white hover:text-cool-gray-300 transition-colors cursor-pointer flex items-center gap-2"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  <span className="text-xs tabular-nums hidden sm:inline text-gray-300">
                    {isMuted ? "Unmute" : "Muted"}
                  </span>
                </button>
              </div>

              {/* Fullscreen */}
              <button
                onClick={handleFullscreenToggle}
                className="text-white hover:text-cool-gray-300 transition-colors cursor-pointer"
              >
                {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </button>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
