import React from 'react';
import Hero from './components/Hero';
import AboutSolution from './components/AboutSolution';
import Features from './components/Features';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
      <Hero />
      <AboutSolution />
      <Features />
      <CTA />
    </div>
  );
}
