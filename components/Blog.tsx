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
    gradient: "from-[#0050f8] to-[#5fbdf7]",
  },
  {
    category: "AI",
    title: "How AI Agents Are Changing the Way We Work",
    description:
      "Autonomous AI agents can handle complex decisions. Here's how to leverage them in your business.",
    author: "Marcus Rivera",
    date: "Jun 10, 2026",
    gradient: "from-[#001033] to-[#0050f8]",
  },
  {
    category: "Guides",
    title: "Building Your First Workflow: A Step-by-Step Guide",
    description:
      "A beginner-friendly walkthrough to creating, testing, and deploying your first automated workflow.",
    author: "Elena Kowalski",
    date: "Jun 5, 2026",
    gradient: "from-[#5fbdf7] to-[#0050f8]",
  },
  {
    category: "Updates",
    title: "May 2026 Product Update: What's New",
    description:
      "New integrations, performance improvements, and the launch of our AI suggestions engine.",
    author: "Product Team",
    date: "Jun 1, 2026",
    gradient: "from-[#0050f8] to-[#001033]",
  },
  {
    category: "Automation",
    title: "Automating Customer Onboarding: A Case Study",
    description:
      "How Liftoff reduced their onboarding time from 3 days to 15 minutes using our platform.",
    author: "James Park",
    date: "May 28, 2026",
    gradient: "from-[#001033] to-[#5fbdf7]",
  },
  {
    category: "AI",
    title: "Understanding AI Confidence Scores in Automation",
    description:
      "Learn how our AI engine evaluates decisions and when to add human-in-the-loop checkpoints.",
    author: "Aisha Mohammed",
    date: "May 22, 2026",
    gradient: "from-[#5fbdf7] to-[#001033]",
  },
];

export default function Blog() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredPosts =
    filter === "All" ? posts : posts.filter((p) => p.category === filter);
  const visiblePosts = showAll ? filteredPosts : filteredPosts.slice(0, 3);

  return (
    <SectionWrapper id="blog">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-[-0.02em] leading-[1.12] mb-5 text-[var(--heading)]"
        >
          Insights &{" "}
          <span className="gradient-text">Automation Ideas</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-xl mx-auto"
        >
          Learn how to automate smarter, build faster, and get more done with
          AI.
        </motion.p>
      </div>

      {/* Category filter */}
      <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setShowAll(false);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
              filter === cat
                ? "bg-[var(--primary-blue)] text-white"
                : "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--heading)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {visiblePosts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden glow-border transition-all duration-300 cursor-pointer"
          >
            <div
              className={`w-full h-44 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
            >
              {/* Diagonal lines overlay for futuristic touch */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 40px)",
                }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            </div>

            <div className="p-6">
              <span className="text-xs font-semibold text-[var(--primary-blue)] uppercase tracking-wide">
                {post.category}
              </span>
              <h3 className="text-base font-semibold text-[var(--heading)] mt-2 mb-2 group-hover:text-[var(--primary-blue)] transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--subtle)]">
                <span className="font-medium">{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {filteredPosts.length > 3 && !showAll && (
        <div className="text-center">
          <Button variant="secondary" onClick={() => setShowAll(true)}>
            Load More
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
}
