"use client";

import { motion } from "framer-motion";
import { 
  SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, // Frontend
  SiNodedotjs, SiExpress, SiPhp, SiPython, SiFlask, // Backend (Removed C++, C# due to import issues)
  SiTensorflow, SiKeras, SiScikitlearn, SiPandas, SiNumpy, // Libraries
  SiMysql, SiMongodb, SiSqlite, // Database (Removed MSSQL)
  SiGit, SiWebstorm, SiGooglecolab, SiPostman, SiSupabase, // Tools
  SiGithub, SiTrello, SiNotion, SiSlack // Collab
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Code, Database, Server } from "lucide-react"; // Fallbacks

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" }, 
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: Code, color: "#00599C" }, // Fallback
      { name: "C#", icon: Code, color: "#239120" }, // Fallback
      { name: "Flask", icon: SiFlask, color: "#000000" },
    ]
  },
  {
      category: "AI & Data",
      items: [
          { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
          { name: "Keras", icon: SiKeras, color: "#D00000" },
          { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
          { name: "Pandas", icon: SiPandas, color: "#150458" },
          { name: "NumPy", icon: SiNumpy, color: "#013243" },
      ]
  },
  {
      category: "Databases",
      items: [
          { name: "MySQL", icon: SiMysql, color: "#4479A1" },
          { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
          { name: "SQLite", icon: SiSqlite, color: "#003B57" },
          { name: "MSSQL", icon: Database, color: "#CC2927" }, // Fallback
      ]
  },
  {
    category: "Tools",
    items: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "VS Code", icon: VscCode, color: "#007ACC" },
        { name: "WebStorm", icon: SiWebstorm, color: "#000000" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ]
  },
  {
      category: "Collaboration",
      items: [
          { name: "GitHub", icon: SiGithub, color: "#181717" },
          { name: "Trello", icon: SiTrello, color: "#0052CC" },
          { name: "Notion", icon: SiNotion, color: "#000000" },
          { name: "Slack", icon: SiSlack, color: "#4A154B" },
      ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
             Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid gap-8">
            {skills.map((category, idx) => (
                <div key={idx} className="bg-white dark:bg-[#0f1016] rounded-2xl p-8 border border-white/5 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-foreground/80">{category.category}</h3>
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                        {category.items.map((skill) => (
                             <motion.div
                                key={skill.name}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center gap-2 group cursor-pointer"
                             >
                                <div className="p-4 rounded-xl bg-background border border-white/5 shadow-sm group-hover:border-primary/50 transition-colors">
                                   <skill.icon className="w-8 h-8 md:w-10 md:h-10 transition-colors" style={{ color: skill.color }} />
                                </div>
                                <span className="text-xs font-medium text-muted">{skill.name}</span>
                             </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
