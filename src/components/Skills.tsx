"use client";

import { motion } from "framer-motion";

type SkillItem = {
  name: string;
  lightIcon: string; // Shown in Light Mode (usually dark/black or colored)
  darkIcon: string; // Shown in Dark Mode (usually light/white or colored)
};

const skills: { category: string; items: SkillItem[] }[] = [
  {
    category: "Frontend",
    items: [
      {
        name: "JavaScript",
        lightIcon: "devicon-javascript-plain colored",
        darkIcon: "devicon-javascript-plain colored",
      },
      {
        name: "React",
        lightIcon: "devicon-react-original colored",
        darkIcon: "devicon-react-original colored",
      },
      {
        name: "Next.js",
        lightIcon: "devicon-nextjs-plain",
        darkIcon: "devicon-nextjs-plain ",
      },
      {
        name: "HTML5",
        lightIcon: "devicon-html5-plain colored",
        darkIcon: "devicon-html5-plain colored",
      },
      {
        name: "CSS3",
        lightIcon: "devicon-css3-plain colored",
        darkIcon: "devicon-css3-plain colored",
      },
      {
        name: "Tailwind",
        lightIcon: "devicon-tailwindcss-original colored",
        darkIcon: "devicon-tailwindcss-original colored",
      },
      {
        name: "Bootstrap",
        lightIcon: "devicon-bootstrap-plain colored",
        darkIcon: "devicon-bootstrap-plain colored",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        lightIcon: "devicon-nodejs-plain colored",
        darkIcon: "devicon-nodejs-plain colored",
      },
      {
        name: "Express",
        lightIcon: "devicon-express-original",
        darkIcon: "devicon-express-original",
      },
      {
        name: "PHP",
        lightIcon: "devicon-php-plain colored",
        darkIcon: "devicon-php-plain colored",
      },
      {
        name: "Python",
        lightIcon: "devicon-python-plain colored",
        darkIcon: "devicon-python-plain colored",
      },
      {
        name: "C++",
        lightIcon: "devicon-cplusplus-plain colored",
        darkIcon: "devicon-cplusplus-plain colored",
      },
      {
        name: "C#",
        lightIcon: "devicon-csharp-plain colored",
        darkIcon: "devicon-csharp-plain colored",
      },
      {
        name: "Flask",
        lightIcon: "devicon-flask-original",
        darkIcon: "devicon-flask-original ",
      },
    ],
  },
  {
    category: "AI Libraries",
    items: [
      {
        name: "TensorFlow",
        lightIcon: "devicon-tensorflow-original colored",
        darkIcon: "devicon-tensorflow-original colored",
      },
      {
        name: "Keras",
        lightIcon: "devicon-keras-plain colored",
        darkIcon: "devicon-keras-plain colored",
      },
      {
        name: "Scikit-Learn",
        lightIcon: "devicon-scikitlearn-plain colored",
        darkIcon: "devicon-scikitlearn-plain colored",
      },
      {
        name: "Pandas",
        lightIcon: "devicon-pandas-plain colored",
        darkIcon: "devicon-pandas-plain ",
      },
      {
        name: "NumPy",
        lightIcon: "devicon-numpy-plain colored",
        darkIcon: "devicon-numpy-plain colored",
      },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        name: "MySQL",
        lightIcon: "devicon-mysql-plain colored",
        darkIcon: "devicon-mysql-plain colored",
      },
      {
        name: "MongoDB",
        lightIcon: "devicon-mongodb-plain colored",
        darkIcon: "devicon-mongodb-plain colored",
      },
      {
        name: "SQLite",
        lightIcon: "devicon-sqlite-plain colored",
        darkIcon: "devicon-sqlite-plain colored",
      },
      {
        name: "MSSQL",
        lightIcon: "devicon-microsoftsqlserver-plain colored",
        darkIcon: "devicon-microsoftsqlserver-plain colored",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        lightIcon: "devicon-git-plain colored",
        darkIcon: "devicon-git-plain colored",
      },
      {
        name: "VS Code",
        lightIcon: "devicon-vscode-plain colored",
        darkIcon: "devicon-vscode-plain colored",
      },
      {
        name: "Postman",
        lightIcon: "devicon-postman-plain colored",
        darkIcon: "devicon-postman-plain colored",
      },
      {
        name: "Supabase",
        lightIcon: "devicon-supabase-plain colored",
        darkIcon: "devicon-supabase-plain colored",
      },
    ],
  },
  {
    category: "Collaboration",
    items: [
      {
        name: "GitHub",
        lightIcon: "devicon-github-original colored",
        darkIcon: "devicon-github-original ",
      },
      {
        name: "Trello",
        lightIcon: "devicon-trello-plain colored",
        darkIcon: "devicon-trello-plain colored",
      },
      {
        name: "Notion",
        lightIcon: "devicon-notion-plain colored",
        darkIcon: "devicon-notion-plain ",
      },
      {
        name: "Slack",
        lightIcon: "devicon-slack-plain colored",
        darkIcon: "devicon-slack-plain ",
      },
    ],
  },
];

export default function Skills() {
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
                      duration: 0.4,
                      delay: skillIdx * 0.08,
                      ease: "easeOut",
                    }}
                    // whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div className="p-4 rounded-xl bg-background border border-black/5 dark:border-white/5 shadow-sm group-hover:border-primary/50 group-hover:shadow-md transition-all flex items-center justify-center w-20 h-20">
                      <i
                        className={`${skill.lightIcon} text-5xl block dark:hidden`}
                      ></i>

                      <i
                        className={`${skill.darkIcon} text-5xl hidden dark:block`}
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
