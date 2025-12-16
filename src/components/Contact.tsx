"use client";

import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-5xl font-bold mb-6">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
          Let’s connect and build something impactful! Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="flex justify-center gap-8 mb-16">
          <Link
            href="mailto:tahirsaad99@gmail.com"
            className="p-4 bg-white dark:bg-[#0f1016] rounded-2xl shadow-lg border border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all group"
          >
            <Mail className="w-8 h-8 text-muted group-hover:text-primary transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/miansaadtahir"
            target="_blank"
            className="p-4 bg-white dark:bg-[#0f1016] rounded-2xl shadow-lg border border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all group"
          >
            <Linkedin className="w-8 h-8 text-muted group-hover:text-secondary transition-colors" />
          </Link>
          <Link
            href="https://github.com/miansaadtahir"
            target="_blank"
            className="p-4 bg-white dark:bg-[#0f1016] rounded-2xl shadow-lg border border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all group"
          >
            <Github className="w-8 h-8 text-muted group-hover:text-accent transition-colors" />
          </Link>
        </div>

        <footer className="border-t border-white/10 pt-8">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Saad Tahir. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
