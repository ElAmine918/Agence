"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does the AI automation work?",
    a: "Our AI engine analyzes your workflow patterns, identifies repetitive tasks, and builds optimized automation pipelines. You define the triggers and actions; the AI handles the logic, error recovery, and scaling.",
  },
  {
    q: "Do I need coding experience to use the platform?",
    a: "Not at all. Our visual workflow builder lets you drag and drop actions, set conditions, and connect apps without writing a single line of code. Power users can also use our API for custom integrations.",
  },
  {
    q: "Can I integrate with my existing tools?",
    a: "Yes! We support 200+ integrations out of the box, including Slack, Google Workspace, Salesforce, HubSpot, GitHub, Jira, and more. Custom webhooks and API endpoints are available on Pro and above.",
  },
  {
    q: "What happens if I exceed my monthly task runs?",
    a: "We'll notify you when you reach 80% of your limit. You can purchase additional credits anytime, or upgrade your plan. We never stop your workflows without warning.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We're SOC 2 Type II certified, use end-to-end encryption, and offer role-based access control. Enterprise customers also get SSO, audit logs, and on-premise deployment options.",
  },
  {
    q: "Can I try it before committing?",
    a: "Yes, we offer a 14-day free trial on all plans with no credit card required. You also get access to our community plan forever with limited features.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className="relative overflow-hidden border-t border-zinc-800 bg-[#050507]">
      {/* Background Grid */}
      <div className="absolute inset-0 remix-grid opacity-30 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Sticky Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <span className="text-xs font-mono font-bold text-fuchsia-400 uppercase tracking-widest">
            faq documentation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] mt-3 mb-5 text-white">
            Everything You Need <br />
            <span className="gradient-text-remix font-black">Before You Start</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Have more questions? Reach out to our technical support team — we&apos;re
            always here to help you get automated.
          </p>
        </motion.div>

        {/* Right Side: Accordions */}
        <div className="lg:col-span-7 flex flex-col border border-zinc-800 rounded-xl bg-zinc-950/40 divide-y divide-zinc-800 overflow-hidden relative plus-corner">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="transition-colors hover:bg-zinc-900/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-mono text-zinc-600 mt-1">
                    0{i + 1} //
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors pr-4">
                    {faq.q}
                  </span>
                </div>
                <div className="p-1 rounded border border-zinc-800 bg-zinc-900/40 text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition-all shrink-0">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-14 text-sm text-zinc-400 leading-relaxed border-t border-zinc-900/50 pt-4 bg-zinc-950/20">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
