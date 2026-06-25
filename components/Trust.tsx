"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Bot, Cpu, Globe, Layers, Lock, Zap } from "lucide-react";

const icons = [Bot, Cpu, Globe, Layers, Lock, Zap];
const labels = ["AI Agent", "Core Engine", "Global APIs", "Model Layers", "Secured API", "Flow Automation"];

export default function Trust() {
  return (
    <SectionWrapper id="trust" className="relative overflow-hidden border-t border-zinc-800 bg-[#050507]">
      {/* Background Grids */}
      <div className="absolute inset-0 remix-grid opacity-30 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Stats and Copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] mb-6 text-white">
            Trusted by teams building <br />
            <span className="gradient-text-remix font-black">smarter systems</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed mb-10">
            From startups to enterprise, teams rely on our platform to automate
            their most critical workflows. We handle the complexity so you can
            focus on innovation.
          </p>

          {/* Stats Board (Monospace retro layout) */}
          <div className="grid grid-cols-3 gap-4 border border-zinc-800 rounded-xl bg-zinc-950/40 p-5 relative plus-corner">
            {["2,500+", "99.99%", "50M+"].map((stat, i) => (
              <div key={i} className="text-center group border-r border-zinc-800/60 last:border-0 pr-2">
                <div className="text-xl sm:text-2xl font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {stat}
                </div>
                <div className="text-[10px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">
                  {["Active Teams", "Uptime Sla", "Runs Executed"][i]}
                </div>
                {/* Micro glow bar */}
                <div className="w-10 h-0.5 bg-zinc-800 mx-auto mt-3 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-1/2 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: High Fidelity Dashboard Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-7 flex items-center justify-center relative min-h-[400px] border border-zinc-800 rounded-xl bg-zinc-950/20 overflow-hidden"
        >
          {/* Radar background scanner */}
          <div className="absolute inset-0 bg-radial-gradient(ellipse at center, rgba(6,182,212,0.03) 0%, transparent 60%) pointer-events-none" />
          
          <div className="relative w-[340px] h-[340px] flex items-center justify-center">
            {/* Spinning Radar Grid Lines */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-zinc-800/60"
            />
            <div className="absolute inset-8 rounded-full border border-dashed border-zinc-900" />
            <div className="absolute inset-20 rounded-full border border-zinc-800/30" />
            
            {/* Fine radar scope marks */}
            <div className="absolute top-0 bottom-0 w-[1px] bg-zinc-900/60" />
            <div className="absolute left-0 right-0 h-[1px] bg-zinc-900/60" />

            {/* Core Node */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-16 h-16 rounded-xl border border-zinc-700 bg-zinc-950 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.08)] relative group">
                <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-tr from-cyan-500 via-fuchsia-500 to-yellow-500 opacity-60 blur-xs" />
                <div className="absolute inset-0 rounded-xl bg-zinc-950 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white fill-white/10" />
                </div>
              </div>
            </div>

            {/* Orbiting Satellite Nodes */}
            {icons.map((Icon, i) => {
              // Pre-computed positions for 6 icons at 60° intervals, radius=110
              // Avoids Math.cos/sin floating-point SSR hydration mismatch
              const positions: [number, number][] = [
                [110, 0],      // 0°
                [55, 95],      // 60°
                [-55, 95],     // 120°
                [-110, 0],     // 180°
                [-55, -95],    // 240°
                [55, -95],     // 300°
              ];
              const [x, y] = positions[i];

              return (
                <div
                  key={i}
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${x}px - 20px)`,
                    top: `calc(50% + ${y}px - 20px)`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center cursor-pointer shadow-md hover:border-zinc-500 transition-colors group relative"
                  >
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                    
                    {/* Blinking indicator node */}
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping opacity-60" />
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    
                    {/* Text Label on Hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5 rounded border border-zinc-800 bg-zinc-950 text-[9px] font-mono text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {labels[i]}
                    </div>
                  </motion.div>
                </div>
              );
            })}

            {/* Micro details: Angular markers */}
            <div className="absolute bottom-2 left-2 font-mono text-[8px] text-zinc-600">SYS_COOR // RX-33</div>
            <div className="absolute top-2 right-2 font-mono text-[8px] text-zinc-600">BEACON_OK // 100%</div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
