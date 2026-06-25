"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  Play,
  Terminal,
  Code2,
  Workflow,
  Sparkles,
  CheckCircle2,
  Database,
  MessageSquare,
  Mail,
  ChevronRight,
  RefreshCw,
  Cpu
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "code" | "logs">("pipeline");
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [logs, setLogs] = useState<string[]>([
    "// Agence AI engine initialized.",
    "// Waiting for webhook trigger...",
  ]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const startSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);
    setActiveTab("pipeline");
    setLogs(["[SYSTEM] Initializing Agence workflow execution...", "[TRIGGER] Stripe Webhook: payment_intent.succeeded received"]);

    // Step 0: Trigger
    setTimeout(() => {
      setCurrentStep(1);
      setLogs(prev => [...prev, "[AI ENGINE] Processing customer profile...", "[AI ENGINE] Running sentiment & churn analysis model...", "[AI MODEL] Sentiment: High Value (Confidence 98%)"]);
    }, 1500);

    // Step 1: AI Analysis
    setTimeout(() => {
      setCurrentStep(2);
      setLogs(prev => [...prev, "[ACTION] Drafting tailored onboarding response...", "[ACTION] Sending notification payload to Slack channel #sales", "[ACTION] Syncing lead details with HubSpot CRM"]);
    }, 3200);

    // Step 2: Completed
    setTimeout(() => {
      setCurrentStep(3);
      setIsRunning(false);
      setLogs(prev => [...prev, "[SUCCESS] Workflow completed successfully in 4.7s", "[SYSTEM] Idle. Awaiting next trigger..."]);
    }, 4800);
  };

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden bg-[#050507]"
    >
      {/* Remix Grid Background */}
      <div className="absolute inset-0 remix-grid opacity-100 z-0" />

      {/* Cyber Glow Accents */}
      <div className="absolute top-[20%] left-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto w-full">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <Badge variant="accent">
            <span className="font-mono text-fuchsia-400">NEW</span>
            <span className="text-zinc-400 font-mono ml-1.5">INTELLIGENT AGENTS UPDATE →</span>
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-[-0.04em] leading-[1.05] max-w-4xl mb-6"
        >
          From Idea to Automation, <br />
          <span className="gradient-text-remix font-black">Powered by AI.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed mb-10"
        >
          Automate your workflows, eliminate repetitive tasks, and scale faster
          with self-learning AI agents built on web standards.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <Button size="lg" href="#pricing" variant="primary">
            Get Started Free
          </Button>
          <Button variant="secondary" size="lg" href="#how-it-works">
            See How It Works
          </Button>
        </motion.div>

        {/* Interactive Agence AI Console (Remix Style Visualizer) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-4xl border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950/80 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative"
        >
          {/* Top Header of Console */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/60">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <span className="w-3 h-3 rounded-full bg-[#10b981]" />
              <span className="text-xs font-mono text-zinc-500 ml-2">agence-workflow-console</span>
            </div>
            <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-800 rounded px-1.5 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-zinc-400">AGY Engine Active</span>
            </div>
          </div>

          {/* Editor Tabs & Controls */}
          <div className="flex flex-col sm:flex-row border-b border-zinc-800 bg-zinc-900/20 text-xs font-mono">
            <div className="flex flex-1 overflow-x-auto hide-scrollbar">
              <button
                onClick={() => setActiveTab("pipeline")}
                className={`px-4 py-3 border-r border-zinc-800 flex items-center gap-2 transition-colors cursor-pointer ${
                  activeTab === "pipeline" ? "bg-zinc-950 text-white font-semibold" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                Visual Pipeline
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-4 py-3 border-r border-zinc-800 flex items-center gap-2 transition-colors cursor-pointer ${
                  activeTab === "code" ? "bg-zinc-950 text-white font-semibold" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-fuchsia-400" />
                agent.ts
              </button>
              <button
                onClick={() => setActiveTab("logs")}
                className={`px-4 py-3 border-r border-zinc-800 flex items-center gap-2 transition-colors cursor-pointer ${
                  activeTab === "logs" ? "bg-zinc-950 text-white font-semibold" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-yellow-400" />
                Live Console
              </button>
            </div>

            {/* Simulation Trigger Button */}
            <div className="p-2 flex items-center justify-end">
              <button
                onClick={startSimulation}
                disabled={isRunning}
                className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isRunning
                    ? "bg-zinc-900 text-zinc-500 border border-zinc-800"
                    : "bg-cyan-500 text-black hover:bg-cyan-400 shadow-md shadow-cyan-500/10 font-bold"
                }`}
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-current" />
                    Trigger Run
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Main Visualizer Window */}
          <div className="p-6 sm:p-8 bg-zinc-950/90 min-h-[280px] flex items-center justify-center">
            {/* Visual Pipeline Tab */}
            {activeTab === "pipeline" && (
              <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-4 max-w-3xl">
                {/* Node 1: Trigger */}
                <div
                  className={`flex-1 p-5 rounded-lg border transition-all duration-300 relative flex flex-col items-center justify-center text-center ${
                    currentStep === 0
                      ? "border-cyan-500 bg-cyan-950/10 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      : currentStep > 0
                      ? "border-emerald-500/50 bg-emerald-950/5"
                      : "border-zinc-800 bg-zinc-900/30"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 border transition-colors ${
                      currentStep === 0
                        ? "bg-cyan-950 border-cyan-500 text-cyan-400"
                        : currentStep > 0
                        ? "bg-emerald-950 border-emerald-500/50 text-emerald-400"
                        : "bg-zinc-900 border-zinc-800 text-zinc-500"
                    }`}
                  >
                    <Database className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 mb-1">TRIGGER</span>
                  <h4 className="text-sm font-semibold text-white">Stripe Webhook</h4>
                  <p className="text-[11px] text-zinc-500 mt-1 max-w-[140px]">Lead Payment Event</p>
                  
                  {currentStep > 0 && (
                    <div className="absolute top-2 right-2 text-emerald-500">
                      <CheckCircle2 className="w-4 h-4 fill-emerald-950/50" />
                    </div>
                  )}
                </div>

                {/* Arrow Connector 1 */}
                <div className="flex items-center justify-center py-2 md:py-0">
                  <ChevronRight
                    className={`w-5 h-5 transition-colors hidden md:block ${
                      currentStep >= 1 ? "text-cyan-500" : "text-zinc-800"
                    }`}
                  />
                  <div className="w-px h-6 bg-zinc-800 md:hidden" />
                </div>

                {/* Node 2: AI Agent */}
                <div
                  className={`flex-1 p-5 rounded-lg border transition-all duration-300 relative flex flex-col items-center justify-center text-center ${
                    currentStep === 1
                      ? "border-cyan-500 bg-cyan-950/10 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      : currentStep > 1
                      ? "border-emerald-500/50 bg-emerald-950/5"
                      : "border-zinc-800 bg-zinc-900/30"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 border transition-colors ${
                      currentStep === 1
                        ? "bg-cyan-950 border-cyan-500 text-cyan-400 animate-pulse"
                        : currentStep > 1
                        ? "bg-emerald-950 border-emerald-500/50 text-emerald-400"
                        : "bg-zinc-900 border-zinc-800 text-zinc-500"
                    }`}
                  >
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 mb-1">COGNITIVE STEP</span>
                  <h4 className="text-sm font-semibold text-white">AI Agent Core</h4>
                  <p className="text-[11px] text-zinc-500 mt-1 max-w-[140px]">Analyze Churn Risk</p>
                  
                  {currentStep === 1 && (
                    <div className="absolute top-2 right-2 text-cyan-400">
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    </div>
                  )}
                  {currentStep > 1 && (
                    <div className="absolute top-2 right-2 text-emerald-500">
                      <CheckCircle2 className="w-4 h-4 fill-emerald-950/50" />
                    </div>
                  )}
                </div>

                {/* Arrow Connector 2 */}
                <div className="flex items-center justify-center py-2 md:py-0">
                  <ChevronRight
                    className={`w-5 h-5 transition-colors hidden md:block ${
                      currentStep >= 2 ? "text-cyan-500" : "text-zinc-800"
                    }`}
                  />
                  <div className="w-px h-6 bg-zinc-800 md:hidden" />
                </div>

                {/* Node 3: Actions */}
                <div
                  className={`flex-1 p-5 rounded-lg border transition-all duration-300 relative flex flex-col items-center justify-center text-center ${
                    currentStep === 2
                      ? "border-cyan-500 bg-cyan-950/10 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      : currentStep > 2
                      ? "border-emerald-500/50 bg-emerald-950/5"
                      : "border-zinc-800 bg-zinc-900/30"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 border transition-colors ${
                      currentStep === 2
                        ? "bg-cyan-950 border-cyan-500 text-cyan-400"
                        : currentStep > 2
                        ? "bg-emerald-950 border-emerald-500/50 text-emerald-400"
                        : "bg-zinc-900 border-zinc-800 text-zinc-500"
                    }`}
                  >
                    <div className="flex gap-1">
                      <MessageSquare className="w-4 h-4 text-orange-400" />
                      <Mail className="w-4 h-4 text-rose-400" />
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 mb-1">ACTIONS</span>
                  <h4 className="text-sm font-semibold text-white">HubSpot & Slack</h4>
                  <p className="text-[11px] text-zinc-500 mt-1 max-w-[140px]">Sync CRM & Alert Team</p>
                  
                  {currentStep > 2 && (
                    <div className="absolute top-2 right-2 text-emerald-500">
                      <CheckCircle2 className="w-4 h-4 fill-emerald-950/50" />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Code Editor Tab */}
            {activeTab === "code" && (
              <div className="w-full text-left font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto select-text p-2">
                <span className="text-zinc-500">// Define Agence SDK integration</span><br />
                <span className="text-zinc-500">// Triggers automatically on lead payment & invokes AI</span><br />
                <span className="text-fuchsia-400">import</span> {"{ AgenceWorkflow, AIModel }"} <span className="text-fuchsia-400">from</span> <span className="text-emerald-400">"@agence/sdk"</span>;<br /><br />
                <span className="text-fuchsia-400">const</span> workflow = <span className="text-fuchsia-400">new</span> <span className="text-yellow-400">AgenceWorkflow</span>(<span className="text-emerald-400">"stripe-onboarding"</span>);<br /><br />
                workflow.trigger(<span className="text-emerald-400">"stripe.payment_intent.succeeded"</span>, <span className="text-fuchsia-400">async</span> (event) =&gt; {"{"}<br />
                &nbsp;&nbsp;<span className="text-fuchsia-400">const</span> profile = <span className="text-fuchsia-400">await</span> <span className="text-yellow-400">AIModel</span>.analyzeCustomer(event.customer);<br /><br />
                &nbsp;&nbsp;<span className="text-fuchsia-400">if</span> (profile.sentiment === <span className="text-emerald-400">"high_value"</span>) {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-400">await</span> workflow.actions.slack.postMessage(<span className="text-emerald-400">"#leads"</span>, {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: <span className="text-emerald-400">{"`🔥 High-value onboarding: ${profile.name}`"}</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"});<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-400">await</span> workflow.actions.crm.syncLead(profile);<br />
                &nbsp;&nbsp;{"}"}<br />
                {"}"});
              </div>
            )}

            {/* Live Logs Tab */}
            {activeTab === "logs" && (
              <div
                ref={logContainerRef}
                className="w-full text-left font-mono text-xs text-zinc-400 leading-relaxed max-h-[220px] overflow-y-auto pr-2 select-text"
              >
                {logs.map((log, i) => {
                  let colorClass = "text-zinc-500";
                  if (log.startsWith("[TRIGGER]")) colorClass = "text-cyan-400";
                  if (log.startsWith("[AI")) colorClass = "text-fuchsia-400";
                  if (log.startsWith("[ACTION]")) colorClass = "text-yellow-400";
                  if (log.startsWith("[SUCCESS]")) colorClass = "text-emerald-400 font-semibold";
                  if (log.startsWith("[SYSTEM]")) colorClass = "text-zinc-400";

                  return (
                    <div key={i} className="py-0.5 border-b border-zinc-950">
                      <span className="text-zinc-600 mr-2">[{new Date().toLocaleTimeString()}]</span>
                      <span className={colorClass}>{log}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Decorative Rainbow Line Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <div className="rainbow-line h-[1px] opacity-25" />
      </div>
    </section>
  );
}
