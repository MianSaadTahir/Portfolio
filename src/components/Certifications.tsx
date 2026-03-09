import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const certifications = [
  {
    title: "AV/EDR Evasion Practical Techniques",
    issuer: "Red Team Leaders",
    date: "Nov 2025",
    image: "/assets/av.jpeg",
    link: "https://courses.redteamleaders.com/completion/dd412739689e9a7d",
  },
  {
    title: "Fundamentals of Agile Project Management",
    issuer: "Project Management Institute",
    date: "Sep 2025",
    image: "/assets/pmi.jpeg",
    link: "https://www.credly.com/badges/42fd4b8e-9385-431d-b163-a75f4834f92c/public_url",
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "Jun 2025",
    image: "/assets/se.png",
    link: "https://www.hackerrank.com/certificates/224028b71565",
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "Jun 2025",
    image: "/assets/js.png",
    link: "https://www.hackerrank.com/certificates/5852135bd75c",
  },
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "Dec 2024",
    image: "/assets/py.jpg",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/89a8d27b54a5d13c7351d2968741a84a5dd524f5#",
  },
  {
    title: "Introduction to Database and SQL",
    issuer: "Great Learning",
    date: "Apr 2024",
    image: "/assets/db.jpg",
    link: "https://www.mygreatlearning.com/certificate/XMWMZWQY",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            Professional certifications and achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="will-change-transform gpu-fix group bg-card rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link
                    href={cert.link}
                    target="_blank"
                    className="p-2 bg-white/15 rounded-full text-white hover:bg-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-2.5 rounded-xl">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                <p className="text-sm text-muted">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
