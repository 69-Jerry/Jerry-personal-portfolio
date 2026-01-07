"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import WorkExperience from "@/components/work-experience";
import CV from "@/components/cv";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FadeIn from "@/components/ui/fade-in";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "work", "cv", "skills", "contact"];
      let currentSection = "about";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        <FadeIn direction="none" duration={0.8}>
          <Hero />
        </FadeIn>

        <section id="about">
          <FadeIn>
            <About />
          </FadeIn>
        </section>

        <section id="projects">
          <FadeIn delay={0.2}>
            <Projects />
          </FadeIn>
        </section>

        <section id="work">
          <FadeIn delay={0.2}>
            <WorkExperience />
          </FadeIn>
        </section>

        <section id="cv">
          <FadeIn direction="left">
            <CV />
          </FadeIn>
        </section>

        <section id="skills">
          <FadeIn direction="right">
            <Skills />
          </FadeIn>
        </section>

        <section id="contact">
          <FadeIn>
            <Contact />
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
