"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-transparent to-primary/5"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-gradient">Get In Touch</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-12"
          >
            Let&apos;s connect and build something impactful! Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 md:gap-8 mb-16"
          >
            <motion.div variants={iconVariants}>
              <Link
                href="mailto:tahirsaad99@gmail.com"
                className="p-4 bg-white dark:bg-card rounded-2xl shadow-lg border border-black/5 dark:border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all group block"
              >
                <Mail className="w-7 h-7 md:w-8 md:h-8 text-foreground/90 group-hover:text-primary transition-colors" />
              </Link>
            </motion.div>

            <motion.div variants={iconVariants}>
              <Link
                href="https://www.linkedin.com/in/miansaadtahir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-card rounded-2xl shadow-lg border border-black/5 dark:border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all group block"
              >
                <Linkedin className="w-7 h-7 md:w-8 md:h-8 text-foreground/90 group-hover:text-secondary transition-colors" />
              </Link>
            </motion.div>

            <motion.div variants={iconVariants}>
              <Link
                href="https://github.com/miansaadtahir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-card rounded-2xl shadow-lg border border-black/5 dark:border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all group block"
              >
                <Github className="w-7 h-7 md:w-8 md:h-8 text-foreground/90 group-hover:text-accent transition-colors" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.footer
            variants={itemVariants}
            className="border-t border-black/10 dark:border-white/10 pt-8"
          >
            <p className="text-xs md:text-sm text-muted">
              &copy; {new Date().getFullYear()} Saad Tahir. All rights reserved.
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
}
