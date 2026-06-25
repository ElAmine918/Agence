"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const categories = ["All", "Automation", "AI", "Guides", "Updates"];

const posts = [
  {
    category: "Automation",
    title: "5 Workflows You Should Automate Today",
    description:
      "Discover the top repetitive tasks eating your team's time and learn how to automate them in minutes.",
    author: "Sarah Chen",
    date: "Jun 15, 2026",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/20",
    slug: "workflows-to-automate",
  },
  {
    category: "AI",
    title: "How AI Agents Are Changing the Way We Work",
    description:
      "Autonomous AI agents can handle complex decisions. Here's how to leverage them in your business.",
    author: "Marcus Rivera",
    date: "Jun 10, 2026",
    gradient: "from-fuchsia-500/20 via-pink-500/10 to-transparent border-fuchsia-500/20",
    slug: "ai-agents-changing-work",
  },
  {
    category: "Guides",
    title: "Building Your First Workflow: A Step-by-Step Guide",
    description:
      "A beginner-friendly walkthrough to creating, testing, and deploying your first automated workflow.",
    author: "Elena Kowalski",
    date: "Jun 5, 2026",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent border-yellow-500/20",
    slug: "building-first-workflow",
  },
  {
    category: "Updates",
    title: "May 2026 Product Update: What's New",
    description:
      "New integrations, performance improvements, and the launch of our AI suggestions engine.",
    author: "Product Team",
    date: "Jun 1, 2026",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/20",
    slug: "may-2026-product-update",
  },
  {
    category: "Automation",
    title: "Automating Customer Onboarding: A Case Study",
    description:
      "How Liftoff reduced their onboarding time from 3 days to 15 minutes using our platform.",
    author: "James Park",
    date: "May 28, 2026",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent border-blue-500/20",
    slug: "automating-customer-onboarding",
  },
  {
    category: "AI",
    title: "Understanding AI Confidence Scores in Automation",
    description:
      "Learn how our AI engine evaluates decisions and when to add human-in-the-loop checkpoints.",
    author: "Aisha Mohammed",
    date: "May 22, 2026",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent border-purple-500/20",
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
    <SectionWrapper id="blog" className="relative overflow-hidden border-t border-zinc-800 bg-[#08080a]">
      {/* Background Grid */}
      <div className="absolute inset-0 remix-grid opacity-30 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest"
          >
            insights journal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] mt-3 mb-5 text-white"
          >
            Insights & <br />
            <span className="gradient-text-remix font-black">Automation Ideas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto"
          >
            Learn how to automate smarter, build faster, and get more done with AI.
          </motion.p>
        </div>

        {/* Monospace Filter Pill Bar */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap font-mono text-[11px]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
              className={`px-3 py-1.5 rounded border transition-all cursor-pointer uppercase ${
                filter === cat
                  ? "bg-white text-black border-white font-bold"
                  : "bg-zinc-950/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visiblePosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-zinc-800 bg-zinc-950/40 overflow-hidden hover:bg-zinc-950 hover:border-zinc-700 transition-all duration-300 cursor-pointer flex flex-col relative"
            >
              {/* Graphic Header Block */}
              <div
                className={`w-full h-44 bg-gradient-to-br ${post.gradient} relative overflow-hidden border-b border-zinc-900 flex items-center justify-center`}
              >
                {/* Micro tech grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06] remix-grid-fine"
                />
                
                {/* Tech watermark text inside banner */}
                <span className="font-mono text-[9px] text-zinc-700 select-none tracking-widest absolute top-3 left-4 uppercase">
                  JOURNAL // {post.category}
                </span>

                <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-black/40 backdrop-blur-sm flex items-center justify-center text-zinc-500 group-hover:scale-105 group-hover:border-zinc-650 transition-all">
                  <span className="font-mono text-xs font-semibold text-zinc-400">{post.category.substring(0,2).toUpperCase()}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                    {post.category}
                  </span>
                  
                  <h3 className="text-base font-bold text-white mt-2 mb-3 tracking-tight group-hover:text-cyan-400 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                </div>

                {/* Footer details */}
                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>BY {post.author.toUpperCase()}</span>
                  <span>{post.date.toUpperCase()}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > 3 && !showAll && (
          <div className="text-center">
            <Button variant="secondary" onClick={() => setShowAll(true)}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
