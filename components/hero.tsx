import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="lg:ml-48 pt-20 pb-12 px-6 lg:px-16 min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl">
        <p className="text-accent mb-4 text-sm tracking-widest font-mono text-neon-pink">
          WELCOME TO MY PORTFOLIO
        </p>
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance text-neon-cyan">
          React Developer 
        </h1>
        <p className="text-xl text-foreground/80 mb-12 max-w-2xl leading-relaxed">
          I build modern, accessible web applications with React and TypeScript.
          Passionate about creating seamless user experiences and writing clean,
          maintainable code.
        </p>
        <div className="flex gap-4">
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 243, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 border-neon cursor-pointer inline-block"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255, 0, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary/10 transition-all duration-300 cursor-pointer inline-block"
          >
            Get In Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
}
