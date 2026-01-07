import { getTechIcon, getTechColor } from "./ui/tech-icon";

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Heavy Dealers Ltd",
    position: "Senior FrontEnd Developer",
    duration: "Jan, 2025 - Present",
    description: [
      "Developed and maintained responsive, high-performance user interfaces using React and Tailwind CSS.",
      "Optimized platform speed and scalability through caching, lazy loading, and reusable components.",
      "Collaborated with backend developers to integrate APIs smoothly and ensureseamless functionality.",
      "Worked closely with UI/UX designers to transform wireframes into accessible, user-friendly designs.",
      "Ensured compliance with web standards and accessibility guidelines (WCAG).",
      "Participated in code reviews and contributed to a clean, scalable, and stable codebase.",
      "Achieved < 3s page load time, reduced UI-related bugs, and improved user retention through enhanced UX.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind",
      "Webflow",
      "Git",
      "Jasmine",
      "jQuery",
      "Vite",
      "Figma",
      "AWS",
      "Zutsand",
      "Prettier",
    ],
  },
  {
    company: "Afrivolve Tech Agency",
    position: "Web Developer / Frontend Developer / Co-Founder",
    duration: "Sep, 2024 - Present",
    description: [
      "Co-founded a tech agency specializing in web development and digital solutions for small to medium-sized businesses.",
      "Developed and maintained responsive, high-performance user interfaces using React and Tailwind CSS.",
      "Optimized platform speed and scalability through caching, lazy loading, and reusable components.",
      "Collaborated with backend developers to integrate APIs smoothly and ensureseamless functionality.",
      "Worked closely with UI/UX designers to transform wireframes into accessible, user-friendly designs.",
      "Ensured compliance with web standards and accessibility guidelines (WCAG).",
      "Participated in code reviews and contributed to a clean, scalable, and stable codebase.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind",
      "Webflow",
      "Git",
      "Jasmine",
      "jQuery",
      "Vite",
      "Figma",
      "AWS",
      "Zutsand",
      "Prettier",
    ],
  },
  {
    company: "BFT Car Rental & Estate Service ",
    position: "Software Developer / IT Manager / Social Media Manager",
    duration: "July, 2023 - present",
    description: [
      "Developed and maintained the company website, enhancing user experience and functionality.",
      "Managed IT infrastructure, ensuring smooth operations and minimal downtime.",
      "Provided technical support and training to staff, improving overall tech proficiency within the company.",
      "Implemented security measures to protect company data and systems from potential threats.",
      "Handled social media accounts, creating content and strategies to boost online presence and engagement.",
      "Coordinated marketing campaigns, resulting in increased customer inquiries and bookings.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "HTML",
      "MySQL",
      "WordPress",
      "Figma",
    ],
  },
  {
    company: "Bashalisha Consulting Services",
    position: "Web Developer",
    duration: "October, 2023 - Feb, 2024",
    description: [
      "Developed and maintained the company website, enhancing user experience and functionality.",
      "Collaborated with designers to implement responsive designs that improved accessibility across devices.",
      "Optimized website performance, resulting in faster load times and improved user engagement.",
      "Integrated third-party services and APIs to enhance website capabilities and user experience.",
      "Ensured website security by implementing best practices and regular updates.",
      "Worked closely with the marketing team to align web content with promotional strategies.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "HTML",
      "MySQL",
      "WordPress",
      "Figma",
    ],
  },
  {
    company: "Juberchie Enterprise",
    position: "Web Developer / Social Media Manager",
    duration: "October, 2023 - Jan, 2025",
    description: [
      "Developed and maintained the company website, enhancing user experience and functionality.",
      "Managed social media accounts, creating content and strategies to boost online presence and engagement.",
      "Coordinated marketing campaigns, resulting in increased customer inquiries and sales.",
      "Collaborated with designers to implement responsive designs that improved accessibility across devices.",
      "Optimized website performance, resulting in faster load times and improved user engagement.",
      "Integrated third-party services and APIs to enhance website capabilities and user experience.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "HTML",
      "MySQL",
      "WordPress",
      "Figma",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="lg:ml-48 py-20 px-6 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-accent text-sm tracking-widest mb-4">CAREER</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-12">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-accent pl-6">
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0" />
              <h3 className="text-2xl font-semibold text-accent">
                {exp.position}
              </h3>
              <p className="text-foreground/70 text-lg">{exp.company}</p>
              <p className="text-sm text-foreground/50 mb-3">{exp.duration}</p>
              <ul className="list-disc list-inside text-foreground/80 mb-4 leading-relaxed space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => {
                  const Icon = getTechIcon(tech);
                  const color = getTechColor(tech);
                  return (
                    <span
                      key={idx}
                      className="text-xs flex items-center gap-1.5 border border-primary/20 bg-primary/5 text-primary px-3 py-1 rounded-full hover:border-primary/50 transition-colors cursor-default"
                      style={{
                        color: color,
                        borderColor: `${color}40`,
                        backgroundColor: `${color}10`,
                      }}
                    >
                      <Icon className="text-sm" />
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
