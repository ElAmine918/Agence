"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDown, HelpCircle } from "lucide-react";

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
    <SectionWrapper id="faq" className="relative bg-[var(--background)] py-24 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          icon={HelpCircle}
          label="FAQ Documentation"
          titleNormal="Everything You Need"
          titleItalic="Before You Start"
          description="Have more questions? Reach out to our technical support team — we're always here to help you get automated."
        />

        <div className="max-w-4xl mx-auto mt-16 flex flex-col border border-[var(--line)] rounded-[32px] bg-[var(--surface)] divide-y divide-[var(--line)] overflow-hidden">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="transition-colors hover:bg-[var(--surface2)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left cursor-pointer group"
              >
                <div className="flex items-start gap-6">
                  <span className="text-[12px] font-mono text-[var(--faint)] mt-1">
                    /0{i + 1}
                  </span>
                  <span className="text-lg sm:text-xl font-medium text-white pr-4 tracking-tight">
                    {faq.q}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--ink)] flex items-center justify-center text-white group-hover:bg-[#333333] transition-all shrink-0">
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
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
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pl-[68px] text-base text-[var(--muted)] leading-relaxed font-medium">
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
