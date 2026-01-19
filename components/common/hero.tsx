"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { HeroSkillsSection } from "./hero-skills-section";
import { HeroSocialsSection } from "./hero-socials-section";
import { ImagePaths } from "@/constants/image-paths";

export const Hero = () => {
  return (
    <section className="relative grid grid-cols-1 items-center gap-12 overflow-hidden min-[896px]:grid-cols-2">
      <div className="relative w-full max-w-60 min-[896px]:order-2 min-[896px]:mx-auto">
        <div className="relative aspect-square">
          <div className="bg-muted/40 absolute inset-0 translate-x-4 translate-y-4 rounded-2xl" />
          <div className="bg-muted/60 absolute inset-0 translate-x-2 translate-y-2 rounded-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-2xl border">
            <Image
              src={ImagePaths.Me.AvatarPlaceholder}
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="space-y-4 min-[896px]:order-1 min-[896px]:space-y-6">
        <Typography variant="h1">
          hi abbas here.{" "}
          <motion.span
            className="inline-block origin-bottom-right"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            👋
          </motion.span>
        </Typography>
        <Typography>22yo frontend engineer from Pakistan 🇵🇰.</Typography>
        <Typography>
          Frontend by profession, aspiring full-stack by passion.
        </Typography>
        <HeroSkillsSection />
        <HeroSocialsSection />
      </div>
    </section>
  );
};
