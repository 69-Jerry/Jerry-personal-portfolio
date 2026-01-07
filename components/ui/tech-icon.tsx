import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaUniversalAccess,
  FaTachometerAlt,
  FaRobot,
  FaWordpress,
  FaAws,
  FaDocker,
  FaGitAlt,
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
  SiMysql,
  SiWebflow,
  SiJquery,
  SiPrettier,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiJasmine,
} from "react-icons/si";
import { MdDevices, MdCode } from "react-icons/md";

export const getTechIcon = (name: string) => {
  // Normalize the name to handle case variations
  const normalized = name.toLowerCase().replace(/\./g, "");

  const iconMap: Record<string, any> = {
    react: FaReact,
    reactjs: FaReact,
    typescript: SiTypescript,
    nextjs: SiNextdotjs,
    next: SiNextdotjs,
    tailwind: SiTailwindcss,
    tailwindcss: SiTailwindcss,
    html: FaHtml5,
    html5: FaHtml5,
    css: FaCss3Alt,
    css3: FaCss3Alt,
    javascript: SiJavascript,
    js: SiJavascript,
    responsive: MdDevices,
    mobile: MdDevices,
    webpack: SiWebpack,
    vite: SiVite,
    figma: FaFigma,
    redux: SiRedux,
    tanstackquery: SiReactquery,
    reactquery: SiReactquery,
    zod: SiZod,
    accessibility: FaUniversalAccess,
    wcag: FaUniversalAccess,
    performance: FaTachometerAlt,
    jest: SiJest,
    rtl: SiTestinglibrary,
    testinglibrary: SiTestinglibrary,
    playwright: FaRobot,
    vitest: SiVitest,
    wordpress: FaWordpress,
    aws: FaAws,
    docker: FaDocker,
    git: FaGitAlt,
    mysql: SiMysql,
    webflow: SiWebflow,
    jquery: SiJquery,
    prettier: SiPrettier,
    postgresql: SiPostgresql,
    postgres: SiPostgresql,
    express: SiExpress,
    expressjs: SiExpress,
    node: SiNodedotjs,
    nodejs: SiNodedotjs,
    jasmine: SiJasmine,
    zutsand: SiRedux, // Mapping typo to similar state tool or general icon if not exact
    zustand: SiRedux, // Zustand icon might not be in the set, using Redux or generic
    "css-in-js": FaCss3Alt,
    "styled-components": SiStyledcomponents,
  };

  // Direct match or partial match logic could go here
  if (iconMap[normalized]) {
    return iconMap[normalized];
  }

  // Fallback for variations
  if (normalized.includes("react")) return FaReact;
  if (normalized.includes("css")) return FaCss3Alt;
  if (normalized.includes("html")) return FaHtml5;
  if (normalized.includes("db") || normalized.includes("sql")) return SiMysql;

  return MdCode; // Generic code icon fallback
};

export const getTechColor = (name: string) => {
  const normalized = name.toLowerCase().replace(/\./g, "");
  const colorMap: Record<string, string> = {
    react: "#61DAFB",
    reactjs: "#61DAFB",
    typescript: "#3178C6",
    nextjs: "#ffffff",
    tailwind: "#06B6D4",
    html: "#E34F26",
    css: "#1572B6",
    javascript: "#F7DF1E",
    wordpress: "#21759B",
    figma: "#F24E1E",
    node: "#339933",
    aws: "#FF9900",
    mysql: "#4479A1",
    git: "#F05032",
  };

  return colorMap[normalized] || "var(--primary)";
};
