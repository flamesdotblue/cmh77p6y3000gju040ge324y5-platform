import React from 'react';
import { Factory, Leaf, Bus, Building2, Wind } from 'lucide-react';

export default function AboutSolution() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        {/* Visual: smog -> wireframe twin */}
        <div className="order-2 md:order-1">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6 shadow-2xl">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-zinc-700/50">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.2),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(8,145,178,0.18),transparent_55%)]" />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-emerald-500/40">
                <svg viewBox="0 0 400 300" className="h-full w-full">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="300" fill="#0a0a0a" />
                  <g opacity="0.23">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <line key={i} x1="0" x2="400" y1={10 + i * 15} y2={10 + i * 15} stroke="#1f2937" strokeWidth="1" />
                    ))}
                    {Array.from({ length: 10 }).map((_, i) => (
                      <line key={i} y1="0" y2="300" x1={20 + i * 36} x2={20 + i * 36} stroke="#1f2937" strokeWidth="1" />
                    ))}
                  </g>
                  {[...Array(5)].map((_, k) => (
                    <polyline key={k} fill="none" stroke="url(#g1)" strokeWidth="2" points={Array.from({ length: 12 }).map((__, j) => `${j * 35},${140 + Math.sin(j + k) * 30 - k * 8}`).join(' ')} opacity={0.5 + k * 0.1} />
                  ))}
                  {[{ x: 80, y: 120 }, { x: 240, y: 160 }, { x: 320, y: 100 }].map((p, i) => (
                    <g key={i}>
                      <circle cx={p.x} cy={p.y} r="4" fill="#34d399" />
                      <circle cx={p.x} cy={p.y} r="10" fill="none" stroke="#34d399" strokeOpacity="0.4" />
                    </g>
                  ))}
                </svg>
              </div>
              <div className="col-span-2 rounded-xl border border-emerald-500/30 bg-black/40 p-4 backdrop-blur">
                <div className="flex items-center gap-3 text-emerald-300">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  CO₂ dispersion twin — live scenario
                </div>
                <p className="mt-2 text-sm text-zinc-300">City smog patterns transformed into a controllable digital wireframe that reveals hotspots and airflow corridors.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 space-y-6 md:order-2">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Cities Are the Frontline of Carbon Emissions
          </h2>
          <p className="max-w-prose text-zinc-300">
            Over two-thirds of global CO₂ emissions originate in urban areas. As cities grow denser, traditional planning cant keep pace with the complex dynamics of transport, power, buildings, and industry. We need tools that see the city as it breathes.
          </p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur">
            <h3 className="text-xl font-medium">A Digital Twin for Smarter Carbon Capture</h3>
            <p className="mt-2 text-zinc-300">
              Urban Carbon Twin simulates emissions, dispersion, and capture at street-level resolution, allowing planners to prototype interventions before theyre built.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-zinc-300 sm:grid-cols-4">
              <Badge icon={<Bus className="h-4 w-4" />} label="Transport" />
              <Badge icon={<Factory className="h-4 w-4" />} label="Industry" />
              <Badge icon={<Building2 className="h-4 w-4" />} label="Buildings" />
              <Badge icon={<Wind className="h-4 w-4" />} label="Airflow" />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <InfoCard title="Roadside Capture Units" desc="Modular curbside devices vacuum and filter CO₂ along high-traffic corridors." />
              <InfoCard title="Vertical Gardens" desc="Bioactive facades absorb and metabolize carbon while cooling streets." />
              <InfoCard title="Biofilters" desc="Flow-through bioreactors scrub emissions near industrial and logistics hubs." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-emerald-200">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function InfoCard({ title, desc }) {
  return (
    <div className="rounded-xl border border-zinc-800/80 bg-gradient-to-br from-zinc-950 to-black p-4">
      <div className="mb-2 flex items-center gap-2 text-emerald-300">
        <Leaf className="h-4 w-4" />
        <span className="text-sm">Capture Tech</span>
      </div>
      <h4 className="text-base font-medium text-white">{title}</h4>
      <p className="mt-1 text-sm text-zinc-400">{desc}</p>
    </div>
  );
}
