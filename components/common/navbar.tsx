"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { NavItems } from "@/constants/navigation";
import { ZIndex } from "@/constants/ui";
import { ThemeToggle } from "./theme-toggle";

export const Navbar = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header
      className={cn(
        "border-border/40 bg-background/70 supports-backdrop-filter:bg-background/60 fixed inset-x-0 top-0 border-b backdrop-blur-md",
        ZIndex.Header,
      )}
    >
      <div className="container flex h-14 max-w-4xl items-center justify-between">
        <nav className="relative flex items-center gap-1">
          {NavItems.map((item) => {
            const active = pathname === item.href;

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setHovered(item.href)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm transition-colors",
                    active ? "text-foreground" : "text-muted-foreground",
                    "hover:text-foreground",
                    ZIndex.Legend,
                  )}
                >
                  {item.label}
                </Link>
                <AnimatePresence>
                  {(hovered === item.href || active) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="bg-muted absolute inset-0 rounded-md"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};
