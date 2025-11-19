'use client'

interface CVSection {
  title: string
  items: string[]
}

const cvSections: CVSection[] = [
  {
    title: 'Education',
    items: [
      'Software Engineering - IPMC University College (2020 - 2022)',
      'TypeScript Professional Development - Udemy (2025)'
    ]
  },
  {
    title: 'Languages',
    items: [
      'English - Fluent',
      'Twi - Native',
      'French - Intermediate'
    ]
  }
]

export default function CV() {
  return (
    <section className="lg:ml-48 py-20 px-6 lg:px-16 bg-card/30">
      <div className="max-w-4xl">
        <p className="text-accent text-sm tracking-widest mb-4">QUALIFICATIONS</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">Curriculum Vitae</h2>
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cvSections.map((section, index) => (
            <div key={index} className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-accent mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-foreground/80 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">•</span>
                    <span>{item}</span>
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
