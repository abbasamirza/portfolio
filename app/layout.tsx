import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Layout } from "@/types/global";
import { Navbar } from "@/components/common/navbar";
import { ThemeProvider } from "next-themes";
import { StoreProvider } from "@/externals/redux/store-provider";
import { Footer } from "@/components/common/footer";

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
    <html
      lang="en"
      className={cn(jetbrainsMono.variable)}
      suppressHydrationWarning
    >
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased")}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <StoreProvider>
            <Navbar />
            <main className="container space-y-10 pt-20 pb-6">{children}</main>
            <Footer />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
