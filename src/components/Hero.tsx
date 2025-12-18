"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/Typewriter";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      id="home"
    >
      {/* Background blobs */}
      <div className="absolute top-20 right-0 -z-10 opacity-30 blur-3xl">
        <div className="w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>
      <div className="absolute top-40 left-20 -z-10 opacity-30 blur-3xl animation-delay-2000">
        <div className="w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="  "
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <span className="text-xs md:text-xs font-bold tracking-wider text-primary uppercase">
              Design &middot; Develop &middot; Deliver
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-2">
            Hi There, I&apos;m Saad Tahir
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight min-h-[3.5em] md:min-h-[2.5em]">
            <span className="text-primary block">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "AI/ML Engineer",
                  "Cybersecurity Enthusiast",
                  "Problem Solver",
                ]}
              />
            </span>
          </h1>
          <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-lg leading-relaxed">
            I turn real-world problems into impactful digital solutions. I am
            passionate about building scalable applications with modern
            technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/assets/Resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-full bg-linear-to-r from-sky-500 to-teal-500 text-white font-bold shadow-lg shadow-primary/30  hover:shadow-xl hover:scale-105 transition-all text-center"
            >
              Resume
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 rounded-full border border-primary/30 hover:bg-primary/20 font-bold hover:scale-105 transition-all text-center text-foreground"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </motion.div>

        {/* Image/Visual content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center   "
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
            <div className="absolute inset-0 bg-linear-to-tr from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse [animation-duration:3s]"></div>
            <Image
              src="/assets/profile.png"
              alt="Saad Tahir"
              fill
              className="object-cover rounded-full border-4 border-primary/10 dark:border-white/10 shadow-2xl z-10"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
