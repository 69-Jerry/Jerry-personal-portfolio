"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaUniversalAccess,
  FaTachometerAlt,
  FaRobot,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiWebpack,
  SiVite,
  SiRedux,
  SiJest,
  SiTestinglibrary,
  SiVitest,
  SiStyledcomponents,
  SiReactquery,
  SiZod,
} from "react-icons/si";
import { MdDevices } from "react-icons/md";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" }, // White for dark mode compatibility
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Responsive", icon: MdDevices, color: "#A0AEC0" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
  {
    category: "State & Tools",
    skills: [
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
      { name: "Zod", icon: SiZod, color: "#3E67B1" },
      { name: "Accessibility", icon: FaUniversalAccess, color: "#00D8FF" },
      { name: "Performance", icon: FaTachometerAlt, color: "#F59E0B" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "RTL", icon: SiTestinglibrary, color: "#E33332" },
      { name: "Playwright", icon: FaRobot, color: "#2EAD33" },
      { name: "Vitest", icon: SiVitest, color: "#FCC72B" },
    ],
  },
];

const containerVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVar = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section className="lg:ml-48 py-20 px-6 lg:px-16 bg-background">
      <div className="max-w-5xl">
        <p className="text-accent text-sm tracking-widest mb-4">EXPERTISE</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-16">
          Technical Skills
        </h2>

        <div className="grid gap-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-semibold text-accent mb-8 border-b border-border pb-2 inline-block">
                {category.category}
              </h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                variants={containerVar}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVar}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "var(--card)",
                      boxShadow: "0 0 15px " + skill.color + "40",
                    }}
                    className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm border-neon transition-all duration-300 group"
                  >
                    <div
                      className="text-4xl mb-3 transition-colors duration-300 drop-shadow-md"
                      style={{ color: skill.color }}
                    >
                      <skill.icon />
                    </div>
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
