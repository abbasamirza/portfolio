import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Layout } from "@/types/global";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abbas' Folio",
  description: "A personal portfolio website showcasing projects and skills.",
};

export default function RootLayout({ children }: Layout) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
