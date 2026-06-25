"use client";

import { motion } from "framer-motion";

export default function ScrollLinkedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.04, // Very fast stagger per word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0.2 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.3, ease: "easeOut" as const } 
    },
  };

  return (
    <motion.p 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="relative mr-2 mt-2">
          <motion.span variants={wordVariants}>{word}</motion.span>
        </span>
      ))}
    </motion.p>
  );
}
