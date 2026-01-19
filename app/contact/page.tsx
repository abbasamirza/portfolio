"use client";

import { ContactForm } from "@/components/common/contact-form";
import { Typography } from "@/components/ui/typography";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen((prev) => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section>
        <Typography variant="h1" className="flex items-center gap-x-2">
          let&apos;s connect.{" "}
          <span className="relative inline-flex size-8 items-center justify-center">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="open"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  📬
                </motion.span>
              ) : (
                <motion.span
                  key="closed"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  ✉️
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </Typography>
      </section>
      <ContactForm />
    </>
  );
}
