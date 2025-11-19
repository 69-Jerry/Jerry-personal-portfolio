'use client'

interface Experience {
  school: string
  course: string
  duration: string
  
}

const experiences: Experience[] = [
  {
    school: 'IPMC Univercity College',
    course: 'Software Engineering',
    duration: '2020 - 2022',
    
  }
]

export default function Education() {
  return (
    <section className="lg:ml-48 py-20 px-6 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-accent text-sm tracking-widest mb-4">Education</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-12">Education</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-accent pl-6">
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0" />
              <h3 className="text-2xl font-semibold text-accent">{exp.course}</h3>
              <p className="text-foreground/70 text-lg">{exp.school}</p>
              <p className="text-sm text-foreground/50 mb-3">{exp.duration}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
