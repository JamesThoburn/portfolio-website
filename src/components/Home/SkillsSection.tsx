const skills = {
  Languages: [
    "Python",
    "JavaScript",
    "TypeScript",
    "R"
  ],
  Frameworks: [
    "React",
    "Next.js"
  ],
  Tools: [
    "Git",
    "GitHub",
    "VS Code"
  ],
  "Data Science": [
    "tidyverse",
    "ggplot",
  ]
}


export default function SkillsSection() {
  return (
    <section className='mt-10'>
        <h2 className='text-3xl font-semibold tracking-tight mb-2'>Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs text-neutral-500 font-semibold uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm bg-neutral-800 text-neutral-200 rounded px-3 py-1.5 mr-2 mb-2"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </section>
  )
}
