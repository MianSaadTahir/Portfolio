"use client";

import { motion } from "framer-motion";

type SkillItem = {
  name: string;
  icon: string;
};

const skills: { category: string; items: SkillItem[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
      { name: "C#", icon: "devicon-csharp-plain colored" },
      { name: "Flask", icon: "devicon-flask-original" },
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
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Trello", icon: "devicon-trello-plain colored" },
      { name: "Notion", icon: "devicon-notion-plain" },
      { name: "Slack", icon: "devicon-slack-plain colored" },
    ],
  },
];

export default function Skills() {
  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {skills.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-card rounded-2xl p-5 md:p-8 border border-black/5 dark:border-white/5 shadow-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                {category.items.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: skillIdx * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div className="p-4 rounded-xl bg-background border border-black/5 dark:border-white/5 shadow-sm group-hover:border-primary/50 group-hover:shadow-md transition-all flex items-center justify-center w-20 h-20">
                      <i
                        className={`${skill.icon} text-5xl text-foreground dark:text-white`}
                      ></i>
                    </div>
                    <span className="text-sm md:text-base font-medium text-foreground/80 group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
