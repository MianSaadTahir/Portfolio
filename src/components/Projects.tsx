"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Recipe Generator",
    tech: "Next.js · n8n · Supabase · MongoDB",
    description:
      "A full-stack AI web app that generates personalized recipes using Gemini AI via n8n workflows, with preferences stored in MongoDB and recipes managed in Supabase.",
    image: "/assets/recipe.jpeg",
    github: "https://github.com/MianSaadTahir/Nexium_Saad_Internship",
    live: "https://nexium-saad-grand-project.vercel.app/",
  },
  {
    title: "Price My Ride",
    tech: "Flask · TensorFlow · Scikit-Learn",
    description:
      "A Flask web app that predicts used car prices with a custom-trained deep neural network, featuring data preprocessing, visualizations, and model evaluation.",
    image: "/assets/price.jpeg",
    github: "https://github.com/MianSaadTahir/Price-My-Ride",
    live: null,
  },
  {
    title: "LabSync AI",
    tech: "Next.js · Node.js · Socket.io ",
    description:
      "An AI-powered system that extracts project requirements from Telegram messages, creates optimized budgets, and tracks budget allocations in real time.",
    image: "/assets/labsync.jpeg",
    github: "https://github.com/MianSaadTahir/LabSync-AI",
    live: null,
  },
  {
    title: "Video Nexus",
    tech: "HTML · CSS · JavaScript",
    description:
      "A YouTube-inspired video platform that provides a responsive UI, category-based browsing, and custom playback controls built in JavaScript.",
    image: "/assets/video.png",
    github: "https://github.com/MianSaadTahir/VideoNexus",
    live: "https://videonexus.netlify.app/",
  },
  {
    title: "Threat Guard",
    tech: "Python · Flask · SQLite",
    description:
      "A Flask-based security app that scans URLs, files, and QR codes for malware, checks breached credentials, and tests IP blocking with DoS simulations.",
    image: "/assets/threat.jpeg",
    github: "https://github.com/MianSaadTahir/Threat-Guard",
    live: null,
  },
  {
    title: "Escape Plan",
    tech: "C# · Windows Forms",
    description:
      "A 2D shooter game that showcases OOP principles (Singleton, Enums, Interfaces) with a modular DLL-based structure, navigation controls, and a dynamic health system.",
    image: "/assets/escape.jpeg",
    github: "https://github.com/MianSaadTahir/Escape-Plan",
    live: null,
  },
  {
    title: "Solitaire",
    tech: "Python · Pygame",
    description:
      "A Python implementation of Klondike Solitaire with a Pygame interface, featuring tableau columns, stock and foundation piles, using data structures like stacks, queues, and linked lists.",
    image: "/assets/solitaire.jpeg",
    github: "https://github.com/MianSaadTahir/Solitaire",
    live: null,
  },
  {
    title: "Five Star Hostel",
    tech: "C# · Windows Forms · MSSQL",
    description:
      "A Windows Forms hostel management system developed in C# with MS SQL Server. It features distinct functionalities for students, resident tutors, and senior wardens.",
    image: "/assets/hostel.png",
    github: "https://github.com/MianSaadTahir/Five-Star-Hostel",
    live: null,
  },
  {
    title: "Auto Shade",
    tech: "ESP32 · Arduino · MQTT · Python",
    description:
      "A hybrid IoT system using ESP32 and Arduino Uno to detect rain, transmit sensor data via MQTT, and control a servo-operated shade with live LCD updates.",
    image: "/assets/autoshade.png",
    github: "https://github.com/MianSaadTahir/IOT-AutoShade",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            A showcase of my recent work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-card rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="p-2 bg-white/15 rounded-full text-white hover:bg-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="p-2 bg-white/15 rounded-full text-white hover:bg-secondary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-8 ">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
                    {project.tech}
                  </p>
                </div>
                <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
