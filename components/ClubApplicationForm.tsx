"use client";

import { useState } from "react";
import { Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export function ClubApplicationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append("Form", "Club Application");

      try {
        await fetch("https://script.google.com/macros/s/AKfycbwSDNTxl5vXT52KCx5Jh6xFRcYkvrAK9nZbCE6VoZ5Y2S_TapBvXTd9bkgmuAd0pSAcNA/exec", {
          method: "POST",
          body: formData,
          mode: "no-cors",
        });
        setSubmitted(true);
      } catch (err) {
        console.error(err);
        setSubmitted(true);
      }
    }
  };

  return (
    <section className="py-32 bg-obsidian relative" id="apply">
      {/* Glow motif */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-neon-violet/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6 text-white">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">Apply to The Club</h2>
          <p className="text-xl text-cool-gray-400">
            Membership is highly restricted to maintain the quality of the velocity syndicate. We review applications weekly.
          </p>
        </div>

        <div className="bg-black/50 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {/* Progress bar */}
              <div className="flex justify-between items-center mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0" />
                <div 
                  className="absolute top-1/2 left-0 h-[2px] bg-neon-cyan -translate-y-1/2 z-0 transition-all duration-500"
                  style={{ width: `${(step - 1) * 50}%` }}
                />
                
                {[1, 2, 3].map((num) => (
                  <div 
                    key={num} 
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      step >= num ? 'bg-neon-cyan text-black shadow-[0_0_15px_rgba(0,240,255,0.5)]' : 'bg-black border border-white/20 text-white'
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>

              {/* Step 1: Basic Info */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                  <h3 className="text-2xl text-white font-medium mb-6">Who are you?</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-cool-gray-400 mb-2">First Name *</label>
                      <input name="firstName" required type="text" className="w-full bg-transparent border-b border-white/20 focus:border-neon-cyan pb-2 text-white outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm text-cool-gray-400 mb-2">Last Name *</label>
                      <input name="lastName" required type="text" className="w-full bg-transparent border-b border-white/20 focus:border-neon-cyan pb-2 text-white outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-cool-gray-400 mb-2">Work Email *</label>
                    <input name="workEmail" required type="email" className="w-full bg-transparent border-b border-white/20 focus:border-neon-cyan pb-2 text-white outline-none transition-colors" />
                  </div>
                </div>
              )}

              {/* Step 2: Context */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                  <h3 className="text-2xl text-white font-medium mb-6">What are you building?</h3>
                  <div>
                    <label className="block text-sm text-cool-gray-400 mb-4">You are representing an...</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-3 p-4 border border-white/20 rounded-xl cursor-pointer w-full hover:border-white/50 bg-white/5 has-[:checked]:border-neon-cyan has-[:checked]:bg-neon-cyan/5 transition-all">
                        <input type="radio" name="orgType" className="accent-neon-cyan w-4 h-4 cursor-pointer" required />
                        <span className="text-white text-sm font-medium">Enterprise</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border border-white/20 rounded-xl cursor-pointer w-full hover:border-white/50 bg-white/5 has-[:checked]:border-neon-cyan has-[:checked]:bg-neon-cyan/5 transition-all">
                        <input type="radio" name="orgType" className="accent-neon-cyan w-4 h-4 cursor-pointer" required />
                        <span className="text-white text-sm font-medium">Startup</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-cool-gray-400 mb-2">LinkedIn Profile URL *</label>
                    <input name="linkedinUrl" required type="url" className="w-full bg-transparent border-b border-white/20 focus:border-neon-cyan pb-2 text-white outline-none transition-colors" placeholder="https://linkedin.com/in/..." />
                  </div>
                </div>
              )}

              {/* Step 3: Intent */}
              {step === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                  <h3 className="text-2xl text-white font-medium mb-6">Why velocity?</h3>
                  <div>
                    <label className="block text-sm text-cool-gray-400 mb-2">Describe the core bottleneck you are trying to solve with an autonomous system. (Be specific) *</label>
                    <textarea name="bottleneck" required rows={4} className="w-full bg-white/5 border border-white/20 rounded-xl p-4 text-white hover:border-white/50 focus:border-neon-cyan outline-none transition-colors resize-none" placeholder="We are spending $2M/yr on manual data entry for compliance..."></textarea>
                  </div>
                </div>
              )}

              <div className="mt-12 flex justify-between items-center">
                {step > 1 ? (
                  <button type="button" onClick={() => setStep(step - 1)} className="text-cool-gray-400 hover:text-white text-sm font-medium transition-colors">
                    &larr; Back
                  </button>
                ) : <div />}
                
                <button type="submit" className="bg-white text-black px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                  {step === 3 ? "Submit Application" : "Continue"} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-16 animate-in zoom-in duration-500">
              <div className="w-20 h-20 rounded-full bg-neon-cyan/20 border border-neon-cyan text-neon-cyan flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-medium text-white mb-4">Application Received</h3>
              <p className="text-cool-gray-400 max-w-md mx-auto">
                Thank you for applying. The syndicate leadership team will review your application and respond within 48 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
