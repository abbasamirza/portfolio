"use client";

import { Typography } from "@/components/ui/typography";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalUrls, Urls } from "@/constants/urls";

export default function Page() {
  const [isLocked, setIsLocked] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLocked((prev) => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <Typography variant="h1" className="flex items-center gap-x-2">
          privacy policy.{" "}
          <span className="relative inline-flex size-8 items-center justify-center">
            <AnimatePresence mode="wait">
              {isLocked ? (
                <motion.span
                  key="locked"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  🔒
                </motion.span>
              ) : (
                <motion.span
                  key="unlocked"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  🔓
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </Typography>
        <Typography className="sm:text-sm">Last Updated: Jan 2026</Typography>
      </div>
      <div className="space-y-8">
        <div className="space-y-3">
          <Typography variant="h2">TL;DR</Typography>
          <Typography>
            This site doesn&apos;t track you. If you use the contact form, your
            information is only used to respond to your message.
          </Typography>
        </div>
        <div className="space-y-3">
          <Typography variant="h2">Hey 👋</Typography>
          <div className="space-y-2">
            <Typography>
              Thanks for stopping by. This is my personal portfolio where I
              share my work, projects, and experience. I care about privacy, so
              here&apos;s a simple, no-nonsense explanation of how things work.
            </Typography>
          </div>
        </div>
        <div className="space-y-3">
          <Typography variant="h2">What I collect (and why)</Typography>
          <div className="space-y-3">
            <Typography>
              This site is mostly static. There are no accounts, no ads, and no
              tracking cookies watching what you do.
            </Typography>
            <Typography>
              There are only a couple of cases where information might be
              stored:
            </Typography>
            <div className="space-y-4">
              <div className="space-y-2">
                <Typography variant="h4">Contacting me</Typography>
                <Typography>
                  If you email me or use the contact form, I&apos;ll only use
                  your email and message to reply and continue the conversation.
                  Your information is never shared, sold, or used for any other
                  purpose.
                </Typography>
              </div>
              <div className="space-y-2">
                <Typography variant="h4">Analytics</Typography>
                <Typography>
                  I may use basic, privacy-friendly analytics to understand how
                  people use the site (like which pages are visited). No
                  personal data or tracking cookies are used for this purpose.
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <Typography variant="h2">How I use the info</Typography>
          <div className="space-y-2">
            <Typography>
              Any information that&apos;s collected is used to:
            </Typography>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 pl-6">
                <span className="bg-foreground/40 h-1.5 w-1.5 shrink-0 rounded-full" />
                <Typography className="flex-1">
                  Keep the site running properly
                </Typography>
              </li>
              <li className="flex items-center gap-2 pl-6">
                <span className="bg-foreground/40 h-1.5 w-1.5 shrink-0 rounded-full" />
                <Typography className="flex-1">
                  Improve the site and content
                </Typography>
              </li>
              <li className="flex items-center gap-2 pl-6">
                <span className="bg-foreground/40 h-1.5 w-1.5 shrink-0 rounded-full" />
                <Typography className="flex-1">
                  Respond to messages and feedback
                </Typography>
              </li>
            </ul>
            <Typography>That&apos;s it.</Typography>
            <Typography>
              I don&apos;t sell, trade, or rent personal data. If you
              accidentally share something you&apos;d rather not have stored,
              just let me know and I&apos;ll remove it.
            </Typography>
          </div>
        </div>
        <div className="space-y-3">
          <Typography variant="h2">Questions?</Typography>
          <Typography>
            If you have questions, concerns, or just want to say hi, email me at{" "}
            <Link
              href={ExternalUrls.Email}
              className="text-foreground decoration-foreground/40 hover:decoration-foreground underline underline-offset-4 transition-colors"
            >
              abbasamirza2@gmail.com
            </Link>{" "}
            or use the{" "}
            <Link
              href={Urls.Contact}
              className="text-foreground decoration-foreground/40 hover:decoration-foreground underline underline-offset-4 transition-colors"
            >
              contact form
            </Link>
            .
          </Typography>
        </div>
      </div>
    </section>
  );
}
