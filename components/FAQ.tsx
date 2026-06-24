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
    <SectionWrapper id="faq">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-[-0.02em] leading-[1.12] mb-5 text-[var(--heading)]">
            Everything You Need to Know{" "}
            <span className="gradient-text">Before You Start</span>
          </h2>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            Have more questions? Reach out to our support team — we&apos;re
            always happy to help.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border-b border-[var(--divider)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
              >
                <span className="text-sm sm:text-base font-semibold text-[var(--heading)] group-hover:text-[var(--primary-blue)] transition-colors pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--subtle)] shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-[var(--muted)] leading-relaxed pb-5">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
