"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, User } from "lucide-react";

const tabs = [
  { id: "bio", label: "Bio", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            My journey through the world of technology and problem solving.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-[#0f1016] rounded-3xl shadow-2xl overflow-hidden border border-white/5">
          {/* Tab Navigation */}
          <div className="flex border-b border-white/5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-6 text-xs md:text-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? "text-primary bg-primary/5 border-b-2 border-primary"
                      : "text-muted hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "bio" && (
                <motion.div
                  key="bio"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <p className="text-lg md:text-xl leading-relaxed text-muted">
                    As a third-year Computer Science student at the University
                    of Engineering and Technology Lahore, I am passionate about
                    building practical, impactful software solutions that
                    combine intelligent systems with clean, user-focused design.
                  </p>
                  <p className="text-lg md:text-xl  leading-relaxed text-muted">
                    With hands-on experience in JavaScript, Python, and PHP, and
                    modern web technologies such as Next.js, Node.js, Tailwind
                    CSS, Express, and REST APIs, I develop scalable full-stack
                    applications backed by Supabase and MongoDB, with a strong
                    focus on authentication, data flow, and system architecture.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-muted">
                    My projects include AI-powered web applications, automation
                    workflows (n8n), deep learning–based predictors,
                    cybersecurity and systems tools, and full-stack CRUD
                    platforms, reflecting solid foundations in OOP, DSA,
                    database design, and operating systems. I emphasize clean,
                    modular code and continuously refine my skills by applying
                    emerging technologies to real-world problems.
                  </p>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="relative pl-8 border-l-2 border-primary/20">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <span className="block text-sm md:text-base text-primary font-bold mb-1">
                      2023 - 2027
                    </span>
                    <h3 className="text-lg md:text-xl font-bold mb-1">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-sm md:text-base text-foreground/80 font-medium">
                      UET, Lahore
                    </p>
                    <p className="text-sm md:text-base text-muted">CGPA: 3.5</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-primary/20">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-muted ring-4 ring-background"></div>
                    <span className="block text-sm md:text-base text-muted font-bold mb-1">
                      2021 - 2023
                    </span>
                    <h3 className="text-lg md:text-xl font-bold mb-1">
                      Intermediate in Computer Science
                    </h3>
                    <p className="text-sm md:text-base  text-foreground/80 font-medium">
                      KIPS College, Lahore
                    </p>
                    <p className="text-sm md:text-base text-muted">Grade: A+</p>
                  </div>
                </motion.div>
              )}

              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="relative pl-8 border-l-2 border-secondary/20">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-secondary ring-4 ring-background"></div>
                    <span className="block text-sm md:text-base text-secondary font-bold mb-1">
                      Sep 2025 - Oct 2025
                    </span>
                    <h3 className="text-xl font-bold mb-1">
                      Backend Developer Intern
                    </h3>
                    <p className="text-sm md:text-base  text-foreground/80 font-medium mb-2">
                      Codev Digital
                    </p>
                    <p className="text-base md:text-lg  text-muted leading-relaxed">
                      Developed Pod-Clip Pro, a full-stack Next.js app with JWT
                      authentication, scalable APIs, secure uploads, optimized
                      processing, and video clipping functionality.
                    </p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-secondary/20">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-secondary ring-4 ring-background"></div>
                    <span className="block text-sm md:text-base  text-secondary font-bold mb-1">
                      Jul 2025 - Aug 2025
                    </span>
                    <h3 className="text-xl font-bold mb-1">
                      Full-Stack AI Developer Intern
                    </h3>
                    <p className="text-sm md:text-base  text-foreground/80 font-medium mb-2">
                      Nexium
                    </p>
                    <p className="text-base md:text-lg  text-muted leading-relaxed">
                      Built an AI-powered Recipe Generator with Next.js,
                      Tailwind CSS, Google AI via n8n, and scalable data storage
                      using Supabase and MongoDB.
                    </p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-secondary/20">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-secondary ring-4 ring-background"></div>
                    <span className="block text-sm md:text-base  text-secondary font-bold mb-1">
                      Apr 2025 - May 2025
                    </span>
                    <h3 className="text-xl font-bold mb-1">
                      Cyber Security Intern
                    </h3>
                    <p className="text-sm md:text-base text-foreground/80 font-medium mb-2">
                      Hack Secure
                    </p>
                    <p className="text-base md:text-lg text-muted leading-relaxed">
                      Performed web app security assessments using Nmap,
                      Gobuster, Wireshark, sqlmap, and XSS testing to identify
                      vulnerabilities and extract sensitive data.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
