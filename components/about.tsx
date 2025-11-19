'use client'

export default function About() {
  return (
    <section className="lg:ml-48 py-20 px-6 lg:px-16 bg-card">
      <div className="max-w-4xl">
        <p className="text-accent text-sm tracking-widest mb-4">ABOUT ME</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">Crafting Digital Experiences</h2>
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            I'm a React developer with 3+ years of experience building scalable web applications. I specialize in modern frontend technologies and have a passion for creating intuitive, accessible user interfaces.
          </p>
          <p>
            Currently, I'm focused on mastering TypeScript and exploring advanced React patterns. I enjoy tackling complex problems and continuously learning new technologies to stay ahead of the curve.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring the latest web development trends.
          </p>
        </div>
      </div>
    </section>
  )
}
