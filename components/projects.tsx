"use client";

const projects = [
  {
    title: "Car Rental & Real Estate Website",
    description:
      "A responsive website for car rental and real estate listings with booking functionality.",
    tags: ["Wordpress"],
    link: "#",
  },
  {
    title: "Laundry Management System",
    description:
      "Web application for managing laundry services, orders, and customer interactions.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Equipment Rental Platform",
    description:
      "Platform for renting various equipment with user authentication and admin dashboard. Frontend developed using React",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Fashion School Website",
    description:
      "Website for a fashion school featuring courses, faculty profiles, and enrollment forms.",
    tags: ["html", "css", "javascript"],
    link: "#",
  },
  {
    title: " Car Rental website",
    description:
      "A responsive car rental website to display available cars and call to action for booking.",
    tags: ["html", "css", "javascript"],
    link: "#",
  },
  {
    title: "Influencer Personal Portfolio - (KALYJAY)",
    description:
      "Personal portfolio website for an influencer to showcase their work and social media presence.",
    tags: ["html", "css", "javascript"],
    link: "#",
  },
  {
    title: "E-commerce Website",
    description:
      "Full-featured e-commerce site with product listings, shopping cart, and checkout functionality.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and contact information.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
  },
];

import { motion } from "framer-motion";
import { getTechIcon, getTechColor } from "./ui/tech-icon";

export default function Projects() {
  return (
    <section className="lg:ml-48 py-20 px-6 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-accent text-sm tracking-widest mb-4">PORTFOLIO</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-12">
          Featured Projects
        </h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(0, 243, 255, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group p-6 border border-border rounded-lg bg-card/40 backdrop-blur-sm border-neon transition-all duration-300 hover:border-primary"
            >
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors text-neon-cyan">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => {
                  const Icon = getTechIcon(tag);
                  const color = getTechColor(tag);
                  return (
                    <span
                      key={idx}
                      className="text-xs flex items-center gap-1.5 border border-primary/30 text-primary px-3 py-1 rounded-full"
                      style={{ color: color, borderColor: `${color}40` }}
                    >
                      <Icon />
                      {tag}
                    </span>
                  );
                })}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
