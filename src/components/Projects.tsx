import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Recipe Generator",
    tech: "Next.js · n8n · Supabase · MongoDB",
    description:
      "A full-stack AI web app that generates personalized recipes using Gemini AI via n8n workflows, with preferences stored in MongoDB and recipes managed in Supabase.",
    image: "/assets/recipe.jpeg",
    github: "https://github.com/MianSaadTahir/Nexium_Saad_Internship",
    // live: "https://nexium-saad-grand-project.vercel.app/",
  },
  {
    title: "Price My Ride",
    tech: "Flask · TensorFlow · Scikit-Learn",
    description:
      "A Flask web app that predicts used car prices with a custom-trained deep neural neural network, featuring data preprocessing, visualizations, and model evaluation.",
    image: "/assets/price.jpeg",
    github: "https://github.com/MianSaadTahir/Price-My-Ride",
    live: null,
  },
  {
    title: "LabSync 360",
    tech: "Next.js · Node.js · Socket.io ",
    description:
      "An Agentic AI-powered system where specialized agents convert Telegram conversations into structured project plans and real-time budget workflows via an MCP server.",
    image: "/assets/labsync.jpeg",
    github: "https://github.com/MianSaadTahir/LabSync360",
    live: null,
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
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            A showcase of my recent work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="will-change-transform gpu-fix group bg-card rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
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
                    {/* {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="p-2 bg-white/15 rounded-full text-white hover:bg-secondary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )} */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
