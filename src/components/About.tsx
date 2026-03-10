import { GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            <span className="text-gradient">About Me</span>
          </h2>
        </div>

        <div className="space-y-24">
          {/* Bio Section */}
          <div data-aos="fade-up" data-aos-delay="100" className=" mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                  I am a Full Stack Developer with 3+ years of experience
                  building scalable web applications, AI-powered automations,
                  and robust backend systems. My work focuses on creating
                  software that is reliable, maintainable, and designed to solve
                  real-world problems efficiently.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 ">
                  I primarily work with modern web technologies such as Next.js,
                  React, and Node.js to develop full-stack applications.
                  My experience includes managing database systems with MongoDB,
                  MySQL, and Supabase, building machine learning models using
                  TensorFlow, creating automation workflows with n8n, and
                  developing mobile applications with Kotlin and Android Studio.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 ">
                  I place strong emphasis on clean architecture, modular code,
                  and scalable system design so that applications remain
                  maintainable as they grow. I am interested in projects where
                  intelligent automation, performance, and thoughtful
                  engineering can deliver meaningful real-world impact, and I
                  remain open to opportunities to collaborate on ambitious and
                  well-engineered products.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mx-auto">
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 mb-5 md:mb-8"
            >
              <div className="bg-primary/10 p-3 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Education
              </h3>
            </div>

            <div className="grid gap-6">
              <div
                data-aos="fade-up"
                className="will-change-transform gpu-fix bg-card p-5 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm hover:border-primary/50 transition-all hover:-translate-y-1"
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
                <p className="text-foreground/80">CGPA: 3.5/4.0</p>
              </div>

              <div
                data-aos="fade-up"
                className="will-change-transform gpu-fix bg-card p-5 md:p-8  rounded-3xl border border-white/5 shadow-sm hover:border-primary/50 transition-all hover:-translate-y-1"
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
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mx-auto">
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 mb-5 md:mb-8"
            >
              <div className="bg-secondary/10 p-3 rounded-xl">
                <Briefcase className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Experience
              </h3>
            </div>

            <div className="grid gap-6">
              <div
                data-aos="fade-up"
                className="will-change-transform gpu-fix bg-card p-5 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm hover:border-secondary/50 transition-all hover:-translate-y-1"
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
                  Developed Pod-Clip Pro, a Next.js app with JWT authentication,
                  scalable APIs, secure uploads, optimized processing, and video
                  clipping functionality.
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="will-change-transform gpu-fix bg-card p-5 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm hover:border-secondary/50 transition-all hover:-translate-y-1"
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
                  CSS, Gemini AI via n8n, and scalable data storage using
                  Supabase and MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
