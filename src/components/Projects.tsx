"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Recipe Generator",
    tech: "Next.js, n8n, Supabase, MongoDB",
    description:
      "A full-stack AI web app that generates personalized recipes using Gemini AI via n8n workflows, with preferences stored in MongoDB and recipes managed in Supabase.",
    image: "/assets/recipe.jpg",
    github: "https://github.com/MianSaadTahir/Nexium_Saad_Internship",
    live: "https://nexium-saad-grand-project.vercel.app/",
  },
  {
    title: "Price My Ride",
    tech: "Flask, TensorFlow, Scikit-Learn",
    description:
      "A Flask web app that predicts used car prices with a custom-trained deep neural network, featuring data preprocessing, visualizations, and model evaluation.",
    image: "/assets/pricemyride.jpg",
    github: "https://github.com/MianSaadTahir/Price-My-Ride",
    live: null,
  },
  {
    title: "Threat Guard",
    tech: "Python, Flask, SQLite",
    description:
      "A Flask-based security app that scans URLs, files, and QR codes for malware, checks breached credentials, and tests IP blocking with DoS simulations.",
    image: "/assets/threatguard.jpg",
    github: "https://github.com/MianSaadTahir/Threat-Guard",
    live: null,
  },
  {
    title: "Video Nexus",
    tech: "HTML, CSS, JavaScript",
    description:
      "A YouTube-inspired video platform that provides a responsive UI, category-based browsing, and custom playback controls built in JavaScript.",
    image: "/assets/videonexus1.jpg",
    github: "https://github.com/MianSaadTahir/VideoNexus",
    live: "https://videonexus.netlify.app/",
  },
  {
    title: "Nike Store",
    tech: "C#, MSSQL, Windows Forms",
    description:
      "A retail inventory system that enables admin and customer modules to manage products, orders, and feedback through a WinForms interface backed by MSSQL.",
    image: "/assets/nikeStore1.jpg",
    github: "https://github.com/MianSaadTahir/Nike-Store",
    live: null,
  },
  {
    title: "Escape Plan",
    tech: "C#, Windows Forms",
    description:
      "A 2D shooter game that showcases OOP principles (Singleton, Enums, Interfaces) with a modular DLL-based structure, navigation controls, and a dynamic health system.",
    image: "/assets/escapePlan1.jpg",
    github: "https://github.com/MianSaadTahir/Escape-Plan",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            A showcase of my recent work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white dark:bg-[#0f1016] rounded-3xl overflow-hidden border border-white/5 shadow-lg hover:shadow-xl transition-all"
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

              <div className="p-8">
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
