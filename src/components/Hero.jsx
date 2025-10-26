import React from 'react';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" aria-label="Urban Carbon Twin Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black" />
      <div className="pointer-events-none absolute -inset-24 opacity-50 mix-blend-screen" aria-hidden>
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute left-1/4 top-1/2 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-white/5 px-4 py-2 text-emerald-300 backdrop-blur-xl">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Real-time urban CO₂ intelligence
        </div>
        <h1 className="font-semibold tracking-tight text-4xl sm:text-6xl md:text-7xl">
          <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
            Urban Carbon Twin
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-sm/6 text-zinc-300 sm:text-base md:text-lg">
          Simulate. Capture. Decarbonize the Future City.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#features" className="group inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-600/20 px-5 py-3 text-emerald-200 shadow-[0_0_25px_-10px_rgba(16,185,129,0.8)] transition hover:bg-emerald-600/30">
            Explore the Simulation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/60 bg-white/5 px-5 py-3 text-zinc-200 hover:bg-white/10">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
