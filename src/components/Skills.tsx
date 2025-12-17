"use client";

import { motion } from "framer-motion";

type SkillItem = {
  name: string;
  icon: string | React.ElementType;
  color?: string;
};

const skills: { category: string; items: SkillItem[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      {
        name: "Next.js",
        icon: "devicon-nextjs-original-wordmark dark:text-white",
      }, // Next.js is black, needs inversion or plain
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original dark:text-white" },
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
      { name: "C#", icon: "devicon-csharp-plain colored" },
      { name: "Flask", icon: "devicon-flask-original dark:text-white" },
    ],
  },
  {
    category: "AI Libraries",
    items: [
      { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
      { name: "Keras", icon: "devicon-keras-plain colored" },
      { name: "Scikit-Learn", icon: "devicon-scikitlearn-plain colored" },
      { name: "Pandas", icon: "devicon-pandas-plain colored" },
      { name: "NumPy", icon: "devicon-numpy-plain colored" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "SQLite", icon: "devicon-sqlite-plain colored" },
      { name: "MSSQL", icon: "devicon-microsoftsqlserver-plain colored" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "WebStorm", icon: "devicon-webstorm-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Supabase", icon: "devicon-supabase-plain colored" },
    ],
  },
  {
    category: "Collaboration",
    items: [
      { name: "GitHub", icon: "devicon-github-original dark:text-white" },
      { name: "Trello", icon: "devicon-trello-plain colored" },
      { name: "Notion", icon: "devicon-notion-plain colored" },
      { name: "Slack", icon: "devicon-slack-plain colored" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid gap-8">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0f1016] rounded-2xl p-8 border border-white/5 shadow-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div className="p-4 rounded-xl bg-background border border-white/5 shadow-sm group-hover:border-primary/50 transition-colors flex items-center justify-center w-20 h-20">
                      {typeof skill.icon === "string" ? (
                        <i
                          className={`${skill.icon} text-5xl block w-full h-full text-center leading-[3rem]`}
                        ></i>
                      ) : (
                        <skill.icon
                          className="w-10 h-10 transition-colors"
                          style={{ color: skill.color }}
                        />
                      )}
                    </div>
                    <span className="text-sm md:text-base font-medium text-foreground/80">
                      {skill.name}
                    </span>
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
