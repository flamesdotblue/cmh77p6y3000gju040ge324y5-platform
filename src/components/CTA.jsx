import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="start" className="relative w-full py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>
      <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-zinc-950 to-black px-8 py-14 text-center shadow-[0_0_80px_-30px_rgba(16,185,129,0.6)]">
        <h2 className="text-2xl font-semibold sm:text-3xl">Design the Carbon-Neutral City of Tomorrow</h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-300">
          Prototype interventions, quantify impact, and accelerate the path to climate-positive urban systems.
        </p>
        <div className="mt-8 flex justify-center">
          <a href="#" className="group inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-600/20 px-6 py-3 text-emerald-200 hover:bg-emerald-600/30">
            Start Building
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
