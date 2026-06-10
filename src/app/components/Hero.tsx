import React from 'react';
// If using actual Shadcn UI, you would import your button like this:
// import { Button } from "@/components/ui/button"
// I've included a styled Tailwind button below to keep it self-contained!

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#004aad]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#00bbff]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Overlay for Tech/Modern Vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-5xl mx-auto px-6 py-32 text-center z-10">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1b79ee]/30 bg-[#004aad]/10 text-[#00bbff] text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#00bbff] animate-pulse" />
          Pushing Beyond Boundaries
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-[#00bbff] bg-clip-text text-transparent">
          Trench-Unlimited
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Deep engineering meets limitless scale. We dig into the toughest tech infrastructure challenges so your business can perform without boundaries.
        </p>

        {/* Action Buttons (Shadcn style layouts) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary Button */}
          <button className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium transition-colors bg-[#1b79ee] hover:bg-[#004aad] text-white shadow-[0_0_20px_rgba(27,121,238,0.4)] hover:shadow-[0_0_25px_rgba(0,74,173,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00bbff]">
            Get Started
          </button>

          {/* Secondary Outline Button */}
          <button className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium transition-colors border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00bbff]">
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom Border Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1b79ee]/40 to-transparent" />
    </div>
  );
}