import React from 'react';
import { ArrowRight, Newspaper, Layers, TrendingUp } from 'lucide-react';
// Note: If you have shadcn button, import it here:
// import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="flex flex-col space-y-6 lg:col-span-7 text-center lg:text-left">
            {/* Tag/Badge */}
            <div className="inline-flex items-center self-center lg:self-start space-x-2 bg-muted px-3 py-1 rounded-full text-sm font-medium border border-border">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>The Blueprint of Modern Construction</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Shaping the Future of <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Precast Concrete</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Your definitive source for global precast concrete news, modular engineering breakthroughs, smart supply chain tracking, and sustainable mix designs.
            </p>

            {/* CTA Buttons (Shadcn Style) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-8 rounded-md bg-primary text-primary-foreground font-medium shadow hover:bg-primary/90 transition-colors">
                Latest News
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-8 rounded-md border border-input bg-background font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                Explore Analytics
              </button>
            </div>

            {/* Mini Trust/Feature Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/60 text-left">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-primary">
                  <Newspaper className="h-5 w-5" />
                  <span className="font-semibold text-foreground">Daily Feed</span>
                </div>
                <p className="text-xs text-muted-foreground hidden sm:block">Real-time industry briefings.</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-primary">
                  <Layers className="h-5 w-5" />
                  <span className="font-semibold text-foreground">Tech Trends</span>
                </div>
                <p className="text-xs text-muted-foreground hidden sm:block">Modular & 3D printing insights.</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-primary">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-semibold text-foreground">Market Data</span>
                </div>
                <p className="text-xs text-muted-foreground hidden sm:block">Supply costs & volume indices.</p>
              </div>
            </div>
          </div>

          {/* Right Visual Graphic (Modern Concrete / Architectural Vibe) */}
          <div className="lg:col-span-5 relative w-full aspect-square max-w-[450px] mx-auto lg:max-w-none">
            {/* Geometric Accent Blocks resembling precast slabs */}
            <div className="absolute inset-0 bg-gradient-to-tr from-muted to-muted/20 rounded-2xl border border-border/80 shadow-inner flex items-center justify-center overflow-hidden">
              <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-lg transform -rotate-12 border border-primary/20 blur-[1px]" />
              <div className="absolute bottom-12 right-12 w-52 h-32 bg-foreground/5 rounded-lg transform rotate-6 border border-foreground/10 flex items-end p-4">
                <div className="w-full space-y-2">
                  <div className="h-2 w-2/3 bg-foreground/20 rounded" />
                  <div className="h-2 w-1/2 bg-foreground/10 rounded" />
                </div>
              </div>
              
              {/* Central Abstract Logo/Icon graphic */}
              <div className="relative z-10 bg-background/80 backdrop-blur-md p-6 rounded-xl border border-border shadow-xl flex flex-col items-center space-y-2">
                <div className="grid grid-cols-2 gap-1 w-12 h-12">
                  <div className="bg-primary rounded-sm" />
                  <div className="bg-primary/60 rounded-sm" />
                  <div className="bg-primary/40 rounded-sm" />
                  <div className="bg-primary/80 rounded-sm" />
                </div>
                <span className="text-sm font-bold tracking-wider uppercase text-muted-foreground">PRECAST</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}