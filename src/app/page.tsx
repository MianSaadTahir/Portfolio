"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
