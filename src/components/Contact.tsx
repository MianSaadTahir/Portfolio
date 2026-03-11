"use client";

import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-b from-transparent to-primary/5"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>

          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-12">
            Let&apos;s connect and build something impactful!
          </p>

          <div className="flex justify-center gap-6 md:gap-8 mb-16">
            <div data-aos="zoom-in" data-aos-delay="50">
              <Link
                href="mailto:miansaadtahir@protonmail.com"
                className="p-4 bg-card rounded-2xl shadow-lg border border-black/5 dark:border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all group block"
              >
                <Mail className="w-7 h-7 md:w-8 md:h-8 text-foreground/90 group-hover:text-primary transition-colors" />
              </Link>
            </div>

            <div data-aos="zoom-in" data-aos-delay="100">
              <Link
                href="https://www.linkedin.com/in/miansaadtahir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card rounded-2xl shadow-lg border border-black/5 dark:border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all group block"
              >
                <Linkedin className="w-7 h-7 md:w-8 md:h-8 text-foreground/90 group-hover:text-secondary transition-colors" />
              </Link>
            </div>

            <div data-aos="zoom-in" data-aos-delay="150">
              <Link
                href="https://github.com/miansaadtahir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card rounded-2xl shadow-lg border border-black/5 dark:border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all group block"
              >
                <Github className="w-7 h-7 md:w-8 md:h-8 text-foreground/90 group-hover:text-accent transition-colors" />
              </Link>
            </div>
          </div>

          <footer className="border-t border-black/50 dark:border-white/10 pt-8">
            <p className="text-xs md:text-sm text-muted">
              &copy; {new Date().getFullYear()} Saad Tahir. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
