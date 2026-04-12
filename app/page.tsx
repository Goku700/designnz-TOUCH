"use client";

import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Works } from "@/components/Works";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Process } from "@/components/Process";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Works />
        <VideoShowcase />
        <Process />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

