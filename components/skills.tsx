'use client'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'CSS-in-JS', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Accessibility (WCAG)', 'Performance Optimization', 'Webpack', 'Vite', 'Figma']
  },
  {
    category: 'State Management',
    skills: ['React Context', 'Redux', 'Zustand', 'TanStack Query']
  },
  // {
  //   category: 'Backend & Tools',
  //   skills: ['Node.js', 'Express', 'PostgreSQL', 'Git', 'Docker']
  // },
  {
    category: 'Testing & QA',
    skills: ['Jest', 'React Testing Library', 'Playwright', 'Vitest']
  }
]

export default function Skills() {
  return (
    <section className="lg:ml-48 py-20 px-6 lg:px-16 bg-card">
      <div className="max-w-4xl">
        <p className="text-accent text-sm tracking-widest mb-4">EXPERTISE</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-accent">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-foreground/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
