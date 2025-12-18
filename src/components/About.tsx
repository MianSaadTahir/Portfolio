"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            <span className="text-gradient">About Me</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="will-change-transform mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                  As a third-year Computer Science student at the University of
                  Engineering and Technology Lahore, I am passionate about
                  building practical, impactful software solutions that combine
                  intelligent systems with clean, user-focused design.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 ">
                  With hands-on experience in JavaScript, Python, and PHP, and
                  modern web technologies such as Next.js, Node.js, Tailwind
                  CSS, Express, and REST APIs, I develop scalable full-stack
                  applications backed by Supabase and MongoDB, with a strong
                  focus on authentication, data flow, and system architecture.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 ">
                  My projects include AI-powered web applications, automation
                  workflows (n8n), deep learning–based predictors, cybersecurity
                  and systems tools, and full-stack CRUD platforms, reflecting
                  solid foundations in OOP, DSA, database design, and operating
                  systems. I emphasize clean, modular code and continuously
                  refine my skills by applying emerging technologies to
                  real-world problems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="flex items-center gap-4 mb-5 md:mb-8"
            >
              <div className="bg-primary/10 p-3 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Education
              </h3>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="will-change-transform bg-white dark:bg-card p-5 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-foreground ">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-primary font-medium">UET, Lahore</p>
                  </div>
                  <div className="text-sm font-bold bg-primary/10 text-primary px-4 py-1.5 rounded-full w-fit">
                    2023 - 2027
                  </div>
                </div>
                <p className="text-foreground/80">CGPA: 3.5</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="will-change-transform bg-white dark:bg-card p-5 md:p-8  rounded-3xl border border-white/5 shadow-sm hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-foreground">
                      Intermediate in Computer Science
                    </h4>
                    <p className="text-primary font-medium">
                      KIPS College, Lahore
                    </p>
                  </div>
                  <div className="text-sm font-bold bg-muted/20 text-foreground/80 px-4 py-1.5 rounded-full w-fit">
                    2021 - 2023
                  </div>
                </div>
                <p className="text-foreground/80">Grade: A+</p>
              </motion.div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="flex items-center gap-4 mb-5 md:mb-8"
            >
              <div className="bg-secondary/10 p-3 rounded-xl">
                <Briefcase className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Experience
              </h3>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="will-change-transform bg-white dark:bg-card p-5 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm hover:border-secondary/50 transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-foreground">
                      Backend Developer Intern
                    </h4>
                    <p className="text-secondary font-medium">Codev Digital</p>
                  </div>
                  <div className="text-sm font-bold bg-secondary/10 text-secondary px-4 py-1.5 rounded-full w-fit">
                    Sep 2025 - Oct 2025
                  </div>
                </div>
                <p className="text-foreground/80 text-base md:text-lg  leading-relaxed">
                  Developed Pod-Clip Pro, a full-stack Next.js app with JWT
                  authentication, scalable APIs, secure uploads, optimized
                  processing, and video clipping functionality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="will-change-transform bg-white dark:bg-card p-5 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm hover:border-secondary/50 transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-foreground">
                      Full-Stack AI Developer Intern
                    </h4>
                    <p className="text-secondary font-medium">Nexium</p>
                  </div>
                  <div className="text-sm font-bold bg-secondary/10 text-secondary px-4 py-1.5 rounded-full w-fit">
                    Jul 2025 - Aug 2025
                  </div>
                </div>
                <p className="text-foreground/80 text-base md:text-lg  leading-relaxed">
                  Built an AI-powered Recipe Generator with Next.js, Tailwind
                  CSS, Google AI via n8n, and scalable data storage using
                  Supabase and MongoDB.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="will-change-transform bg-white dark:bg-card p-5 md:p-8 rounded-3xl border border-white/5 shadow-sm hover:border-secondary/50 transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-foreground">
                      Cyber Security Intern
                    </h4>
                    <p className="text-secondary font-medium">Hack Secure</p>
                  </div>
                  <div className="text-sm font-bold bg-secondary/10 text-secondary px-4 py-1.5 rounded-full w-fit">
                    Apr 2025 - May 2025
                  </div>
                </div>
                <p className="text-foreground/80 text-base md:text-lg  leading-relaxed">
                  Performed web app security assessments using Nmap, Gobuster,
                  Wireshark, sqlmap, and XSS testing to identify vulnerabilities
                  and extract sensitive data.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
