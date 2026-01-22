"use client";

import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center">
      <div className="space-y-4">
        <Typography
          variant="h1"
          className="flex items-center justify-center gap-x-2"
        >
          projects.{" "}
          <motion.span
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ⚙️
          </motion.span>
        </Typography>
        <div className="space-y-2">
          <Typography variant="h2" className="text-foreground">
            Coming Soon
          </Typography>
          <Typography className="max-w-md">
            Currently curating and polishing my best work. Check back soon for a
            showcase of projects I&apos;m proud of.
          </Typography>
        </div>
      </div>
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-foreground/40 size-2 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
