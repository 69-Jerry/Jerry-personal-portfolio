'use client'

export default function Hero() {
  return (
    <section className="lg:ml-48 pt-20 pb-12 px-6 lg:px-16 min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl">
        <p className="text-accent mb-4 text-sm tracking-widest">WELCOME TO MY PORTFOLIO</p>
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">
          React Developer & UI Enthusiast
        </h1>
        <p className="text-xl text-foreground/80 mb-12 max-w-2xl leading-relaxed">
          I build modern, accessible web applications with React and TypeScript. Passionate about creating seamless user experiences and writing clean, maintainable code.
        </p>
        <div className="flex gap-4">
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
            View My Work
          </button>
          <button className="border border-foreground/30 text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-foreground/5 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
