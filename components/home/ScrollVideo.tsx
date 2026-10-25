"use client";

import { useEffect, useRef, useState } from "react";
import { m, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { track } from "@/lib/analytics";

const POSTER = "/video/velociti-poster.jpg";
const CAPTIONS = "/video/velociti.en.vtt";

function Sources() {
  return (
    <>
      <source src="/video/velociti-480.webm" type="video/webm" media="(max-width: 767px)" />
      <source src="/video/velociti-480.mp4" type="video/mp4" media="(max-width: 767px)" />
      <source src="/video/velociti-720.webm" type="video/webm" />
      <source src="/video/velociti-720.mp4" type="video/mp4" />
    </>
  );
}

/**
 * The Home film. Scales from 86% to full content width as it scrolls in,
 * autoplays muted while at least 40% visible, and opens a lightbox player
 * with sound and captions. Reduced motion: no scaling, no autoplay.
 */
export function ScrollVideo({ title, playLabel }: { title: string; playLabel: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [near, setNear] = useState(false);

  // Manual motion values so server HTML and reduced-motion clients agree.
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "center center"] });
  const scale = useMotionValue(0.86);
  const radius = useMotionValue(28);
  const apply = (p: number) => {
    scale.set(0.86 + 0.14 * p);
    radius.set(28 - 16 * p);
  };
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!reduce) apply(p);
  });
  useEffect(() => {
    if (reduce) {
      scale.set(1);
      radius.set(28);
    } else apply(scrollYProgress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  // Attach sources only once the frame is near the viewport.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Muted autoplay while ≥40% visible; pause when out of view.
  useEffect(() => {
    const el = frameRef.current;
    const video = videoRef.current;
    if (!el || !video || !near || reduce) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio >= 0.4) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: [0, 0.4] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near, reduce]);

  const open = () => {
    videoRef.current?.pause();
    dialogRef.current?.showModal();
    const v = lightboxVideoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    track("video_played", { video_name: "velociti_film", location: window.location.pathname, is_lightbox: true });
  };

  const close = () => {
    lightboxVideoRef.current?.pause();
    dialogRef.current?.close();
  };

  return (
    <section aria-label={title} className="pb-[72px] lg:pb-[120px]">
      <div className="container-site">
        <m.div
          ref={frameRef}
          style={{ scale, borderRadius: radius }}
          className="relative mx-auto aspect-video w-full origin-top overflow-hidden bg-night will-change-transform"
        >
          {near && !reduce ? (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              poster={POSTER}
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              tabIndex={-1}
            >
              <Sources />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={POSTER} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(11,13,18,0.7),transparent_45%)]" />
          <p className="t-mono absolute bottom-5 left-5 text-white/85 sm:bottom-7 sm:left-7">{title}</p>
          <button
            type="button"
            onClick={open}
            aria-label={playLabel}
            className="absolute left-1/2 top-1/2 inline-flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-105 sm:h-24 sm:w-24"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
            </svg>
          </button>
        </m.div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={title}
        onClose={() => lightboxVideoRef.current?.pause()}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="m-auto w-[min(1200px,calc(100vw-32px))] max-w-none bg-transparent p-0 backdrop:bg-night/90"
      >
        <div className="relative pt-14">
          <button
            type="button"
            onClick={close}
            aria-label="Close video"
            className="absolute right-0 top-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
            </svg>
          </button>
          <video ref={lightboxVideoRef} className="aspect-video w-full rounded-[12px] bg-night" controls playsInline preload="none" poster={POSTER}>
            <Sources />
            <track kind="captions" src={CAPTIONS} srcLang="en" label="English" default />
          </video>
        </div>
      </dialog>
    </section>
  );
}
