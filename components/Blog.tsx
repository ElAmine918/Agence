"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { BookOpen } from "lucide-react";

const categories = ["All", "Automation", "AI", "Guides", "Updates"];

const posts = [
  {
    category: "Automation",
    title: "5 Workflows You Should Automate Today",
    description: "Discover the top repetitive tasks eating your team's time and learn how to automate them in minutes.",
    author: "Sarah Chen",
    date: "Jun 15, 2026",
    slug: "workflows-to-automate",
  },
  {
    category: "AI",
    title: "How AI Agents Are Changing the Way We Work",
    description: "Autonomous AI agents can handle complex decisions. Here's how to leverage them in your business.",
    author: "Marcus Rivera",
    date: "Jun 10, 2026",
    slug: "ai-agents-changing-work",
  },
  {
    category: "Guides",
    title: "Building Your First Workflow: A Step-by-Step Guide",
    description: "A beginner-friendly walkthrough to creating, testing, and deploying your first automated workflow.",
    author: "Elena Kowalski",
    date: "Jun 5, 2026",
    slug: "building-first-workflow",
  },
  {
    category: "Updates",
    title: "May 2026 Product Update: What's New",
    description: "New integrations, performance improvements, and the launch of our AI suggestions engine.",
    author: "Product Team",
    date: "Jun 1, 2026",
    slug: "may-2026-product-update",
  },
  {
    category: "Automation",
    title: "Automating Customer Onboarding: A Case Study",
    description: "How Liftoff reduced their onboarding time from 3 days to 15 minutes using our platform.",
    author: "James Park",
    date: "May 28, 2026",
    slug: "automating-customer-onboarding",
  },
  {
    category: "AI",
    title: "Understanding AI Confidence Scores in Automation",
    description: "Learn how our AI engine evaluates decisions and when to add human-in-the-loop checkpoints.",
    author: "Aisha Mohammed",
    date: "May 22, 2026",
    slug: "understanding-ai-confidence-scores",
  },
];

export default function Blog() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredPosts =
    filter === "All" ? posts : posts.filter((p) => p.category === filter);
  const visiblePosts = showAll ? filteredPosts : filteredPosts.slice(0, 3);

  return (
    <SectionWrapper id="blog" className="relative bg-[var(--background)] py-24 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          icon={BookOpen}
          label="Insights Journal"
          titleNormal="Insights &"
          titleItalic="Automation"
          titleEnd="Ideas"
          description="Learn how to automate smarter, build faster, and get more done with AI."
        />

        {/* Filter Pill Bar */}
        <div className="flex items-center justify-center gap-3 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2.5 rounded-full border transition-all cursor-pointer font-medium text-sm ${
                filter === cat
                  ? "bg-white text-black border-white"
                  : "bg-[var(--surface)] text-[var(--muted)] border-[var(--line)] hover:bg-[var(--surface2)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {visiblePosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-[32px] border border-[var(--line)] bg-[var(--surface)] overflow-hidden hover:bg-[var(--surface2)] transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              {/* Graphic Placeholder */}
              <div className="w-full h-48 bg-[var(--ink)] relative overflow-hidden border-b border-[var(--line)] flex items-center justify-center">
                {/* Subtle texture inside the image area */}
                <div className="absolute inset-0 wave-pattern opacity-[0.05]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--surface)] opacity-50" />
                
                {/* Monospace watermark */}
                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[var(--faint)] uppercase tracking-widest">
                  JOURNAL // {post.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-sans font-medium text-white mb-4 tracking-tight group-hover:text-[var(--muted)] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-8 font-medium">
                    {post.description}
                  </p>
                </div>

                {/* Footer details */}
                <div className="pt-6 border-t border-[var(--divider)] flex items-center justify-between text-[11px] font-mono text-[var(--faint)]">
                  <span className="uppercase">By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > 3 && !showAll && (
          <div className="text-center">
            <Button variant="secondary" onClick={() => setShowAll(true)} className="rounded-full">
              Load More
            </Button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
