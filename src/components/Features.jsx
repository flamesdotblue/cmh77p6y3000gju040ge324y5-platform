import React from 'react';
import { BarChart3, Map, Leaf, Settings } from 'lucide-react';

export default function Features() {
  const items = [
    {
      title: 'Model Emissions Across Sectors',
      desc: 'Integrate data from traffic, power, buildings, and industry to generate a unified emissions field.',
      icon: <BarChart3 className="h-5 w-5 text-emerald-300" />,
    },
    {
      title: 'Test Capture Strategies',
      desc: 'Place roadside units, vertical gardens, and biofilters to measure localized impact and system cost.',
      icon: <Leaf className="h-5 w-5 text-emerald-300" />,
    },
    {
      title: 'Predict Air Quality Improvements',
      desc: 'Simulate dispersion and forecast exposure reductions under varying wind, temperature, and volume.',
      icon: <Map className="h-5 w-5 text-emerald-300" />,
    },
    {
      title: 'Support Urban Planning Decisions',
      desc: 'Scenario compare, sensitivity analyses, and reporting to guide policy and investment.',
      icon: <Settings className="h-5 w-5 text-emerald-300" />,
    },
  ];

  return (
    <section id="features" className="relative w-full py-20">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Holographic Dashboards</h2>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Transparent panels reveal live metrics for emissions, dispersion and capture efficiency across the city.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-white/5 p-6 shadow-[0_0_60px_-30px_rgba(16,185,129,0.8)] backdrop-blur-xl">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl" />
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
              </div>
              <div className="flex items-center gap-3">{f.icon}<span className="text-sm text-emerald-300">Feature</span></div>
              <h3 className="mt-2 text-lg font-medium text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{f.desc}</p>
              <div className="mt-5 grid grid-cols-5 gap-2">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="col-span-1 h-10 rounded bg-gradient-to-b from-emerald-400/30 to-cyan-400/20" style={{ opacity: 0.5 + ((i % 5) * 0.1), transform: `scaleY(${0.6 + Math.sin(i) * 0.2})`, transformOrigin: 'bottom' }} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur">
          <h3 className="text-lg font-medium">CO₂ Dispersion Map</h3>
          <p className="mt-1 text-sm text-zinc-300">Hotspots glow brighter; pulsing rings indicate capture efficiency over time.</p>
          <div className="mt-4 aspect-[16/7] w-full overflow-hidden rounded-xl ring-1 ring-emerald-500/30">
            <svg viewBox="0 0 1200 520" className="h-full w-full">
              <defs>
                <radialGradient id="hot" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
                </radialGradient>
              </defs>
              <rect width="1200" height="520" fill="#0a0a0a" />
              <g opacity="0.15">
                {Array.from({ length: 26 }).map((_, i) => (
                  <line key={i} x1="0" x2="1200" y1={20 + i * 20} y2={20 + i * 20} stroke="#1f2937" />
                ))}
                {Array.from({ length: 40 }).map((_, i) => (
                  <line key={i} y1="0" y2="520" x1={20 + i * 30} x2={20 + i * 30} stroke="#1f2937" />
                ))}
              </g>
              {[{ x: 260, y: 260 }, { x: 540, y: 200 }, { x: 880, y: 320 }].map((p, i) => (
                <g key={i}>
                  {[...Array(5)].map((__, r) => (
                    <circle key={r} cx={p.x} cy={p.y} r={20 + r * 24} fill="none" stroke="url(#hot)" strokeOpacity={0.3 - r * 0.05} />
                  ))}
                  <circle cx={p.x} cy={p.y} r="14" fill="url(#hot)" />
                </g>
              ))}
              <g>
                {Array.from({ length: 60 }).map((_, i) => (
                  <circle key={i} cx={40 + (i * 18) % 1160} cy={40 + ((i * 53) % 440)} r={1.5} fill="#22d3ee" opacity={0.5} />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
