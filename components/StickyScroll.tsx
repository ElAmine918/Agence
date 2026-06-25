"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { 
  Database, 
  MessageSquare, 
  Mail, 
  Code, 
  GitBranch, 
  Cpu, 
  Play, 
  Zap, 
  Layers, 
  ArrowRight,
  Sparkles,
  CheckCircle
} from "lucide-react";

const slides = [
  {
    title: "Connect your tools",
    description:
      "Link the apps you already use — CRMs, databases, messaging platforms, cloud storage — in seconds. Agence autodetects authentication and payload schemas.",
  },
  {
    title: "Design your logic",
    description:
      "Use our visual builder to set conditions, triggers, and cognitive pathways that define how your automation operates. No complex hosting or APIs required.",
  },
  {
    title: "Let AI handle the rest",
    description:
      "Once deployed, our AI engine runs your workflows 24/7, adapts to API structure updates, automatically retries failed steps, and surfaces key insights.",
  },
];

export default function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);

  // Monitor scroll progress to update right-hand side graphic
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveStep(0);
    } else if (latest >= 0.33 && latest < 0.66) {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }
  });

  return (
    <section
      ref={containerRef}
      id="sticky-scroll"
      className="relative h-[300vh] border-t border-zinc-800 bg-[#08080a]"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Grid Overlay */}
        <div className="absolute inset-0 remix-grid opacity-30 z-0 pointer-events-none" />

        <div className="relative w-full max-w-[1200px] mx-auto px-6 sm:px-10 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 relative h-[50vh] flex flex-col justify-center">
            {slides.map((slide, i) => {
              const start = i / slides.length;
              const end = (i + 1) / slides.length;
              const mid = (start + end) / 2;

              return (
                <StickySlideText
                  key={i}
                  slide={slide}
                  index={i}
                  scrollYProgress={scrollYProgress}
                  start={start}
                  mid={mid}
                  end={end}
                />
              );
            })}
          </div>

          {/* Right Column: Visual Console Showcase */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] h-[360px] rounded-xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-sm overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Header bar */}
              <div className="px-4 py-2.5 border-b border-zinc-900 bg-zinc-900/40 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-850" />
                  <span className="text-zinc-500 font-medium">showcase-visualizer.env</span>
                </div>
                <span className="text-zinc-600">STEP_0{activeStep + 1}</span>
              </div>

              {/* Graphic Viewports */}
              <div className="flex-1 p-6 flex items-center justify-center relative bg-zinc-950/50">
                <AnimatePresence mode="wait">
                  {activeStep === 0 && <ConnectIllustration key="connect" />}
                  {activeStep === 1 && <DesignIllustration key="design" />}
                  {activeStep === 2 && <EngineIllustration key="engine" />}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Left side fade in/out text
function StickySlideText({
  slide,
  index,
  scrollYProgress,
  start,
  mid,
  end,
}: {
  slide: { title: string; description: string };
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  mid: number;
  end: number;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, mid, end - 0.05, end],
    [0, 1, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [start, start + 0.05, mid], [30, 0, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-0 flex flex-col justify-center pointer-events-none"
    >
      <span className="text-xs font-mono font-bold text-cyan-400 mb-3 uppercase tracking-widest">
        STAGE // 0{index + 1}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1] mb-5">
        {slide.title}
      </h2>
      <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-md">
        {slide.description}
      </p>
    </motion.div>
  );
}

// Graphic 1: Integrations Connector
function ConnectIllustration() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col justify-center items-center relative"
    >
      {/* Central Agence Hub */}
      <div className="w-14 h-14 rounded-xl border border-zinc-700 bg-zinc-900 flex items-center justify-center shadow-lg shadow-cyan-500/5 relative z-10">
        <div className="absolute inset-0 rounded-xl bg-cyan-500/10 blur-md" />
        <Zap className="w-6 h-6 text-cyan-400 fill-cyan-400/10" />
      </div>

      {/* Orbiting Icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Connecting vector SVG */}
        <svg className="absolute w-[80%] h-[80%] pointer-events-none" viewBox="0 0 200 200">
          <line x1="100" y1="100" x2="30" y2="40" stroke="#27272a" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="100" y1="100" x2="170" y2="40" stroke="#27272a" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="100" y1="100" x2="30" y2="160" stroke="#27272a" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="100" y1="100" x2="170" y2="160" stroke="#27272a" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        {/* Orbit Node 1: Database */}
        <motion.div variants={item} className="absolute top-6 left-6 w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center">
          <Database className="w-4.5 h-4.5 text-zinc-400" />
        </motion.div>
        {/* Orbit Node 2: Slack */}
        <motion.div variants={item} className="absolute top-6 right-6 w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center">
          <MessageSquare className="w-4.5 h-4.5 text-orange-400" />
        </motion.div>
        {/* Orbit Node 3: Mail */}
        <motion.div variants={item} className="absolute bottom-6 left-6 w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center">
          <Mail className="w-4.5 h-4.5 text-rose-400" />
        </motion.div>
        {/* Orbit Node 4: Github */}
        <motion.div variants={item} className="absolute bottom-6 right-6 w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center">
          <Code className="w-4.5 h-4.5 text-zinc-300" />
        </motion.div>
      </div>

      <div className="absolute bottom-2 text-center text-[10px] font-mono text-zinc-500">200+ INTEGRATIONS DETECTED</div>
    </motion.div>
  );
}

// Graphic 2: Visual Logic Design
function DesignIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col justify-center items-center text-xs font-mono"
    >
      <div className="flex flex-col gap-4 w-full max-w-[280px] relative">
        {/* Tree Connection Line */}
        <div className="absolute left-[24px] top-6 bottom-6 w-0.5 bg-zinc-800" />

        {/* Node 1: Trigger */}
        <div className="flex items-center gap-3 bg-zinc-900/60 border border-zinc-800 rounded-lg p-2.5 z-10">
          <div className="w-5 h-5 rounded bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
            <Zap className="w-3 h-3" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500">TRIGGER</span>
            <span className="text-white font-semibold text-[11px]">webhook.received</span>
          </div>
        </div>

        {/* Node 2: Conditional Decision Branch */}
        <div className="flex items-center gap-3 bg-zinc-900/60 border border-zinc-800 rounded-lg p-2.5 z-10 ml-6 relative">
          <div className="absolute -left-[19px] top-1/2 -translate-y-1/2 w-[18px] h-0.5 bg-zinc-800" />
          <div className="w-5 h-5 rounded bg-fuchsia-950 border border-fuchsia-800 flex items-center justify-center text-fuchsia-400">
            <GitBranch className="w-3 h-3" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500">BRANCH</span>
            <span className="text-white font-semibold text-[11px]">if score &gt;= 0.85</span>
          </div>
        </div>

        {/* Node 3: AI Cognitive Processor */}
        <div className="flex items-center gap-3 bg-zinc-900/60 border border-zinc-800 rounded-lg p-2.5 z-10 ml-12 relative">
          <div className="absolute -left-[19px] top-1/2 -translate-y-1/2 w-[18px] h-0.5 bg-zinc-800" />
          <div className="w-5 h-5 rounded bg-yellow-950 border border-yellow-800 flex items-center justify-center text-yellow-400">
            <Cpu className="w-3 h-3" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500">COGNITION</span>
            <span className="text-white font-semibold text-[11px]">ai.draft_email</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Graphic 3: Execution Engine Log
function EngineIllustration() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <div className="w-full max-w-[280px] bg-black/60 border border-zinc-900 rounded-lg p-5 flex flex-col gap-4 font-mono text-[11px]">
        <div className="flex items-center justify-between pb-3 border-b border-zinc-900">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-white font-semibold">AGY_ENGINE</span>
          </div>
          <span className="text-zinc-600">PID // 8842</span>
        </div>

        <div className="flex flex-col gap-1.5 text-zinc-400">
          <div className="flex justify-between">
            <span>Uptime:</span>
            <span className="text-zinc-300">99.992%</span>
          </div>
          <div className="flex justify-between">
            <span>Active Workers:</span>
            <span className="text-zinc-300">32 / 32</span>
          </div>
          <div className="flex justify-between">
            <span>Current State:</span>
            <span className="text-cyan-400 font-semibold">EXECUTING{dots}</span>
          </div>
        </div>

        <div className="pt-2">
          <div className="w-full bg-zinc-900 h-2.5 rounded-full overflow-hidden border border-zinc-800">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "85%" }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
            />
          </div>
          <div className="flex justify-between text-[9px] text-zinc-500 mt-1.5">
            <span>MEMORY: 142MB</span>
            <span>CPU: 4.8%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
