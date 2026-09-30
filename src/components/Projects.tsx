import { useMemo, useState } from 'react'
import { FolderKanban } from 'lucide-react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  const categories = useMemo(() => Array.from(new Set(projects.map((p) => p.category))), [])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const visibleProjects = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : projects

  return (
    <section id="projetos" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Projetos BI"
          title="Dashboards e soluções de Business Intelligence"
          description="Projetos reais de Power BI desenvolvidos ao longo da minha trajetória profissional."
        />

        {categories.length > 1 && (
          <div className="mb-10 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === null
                  ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                  : 'border-slate-700 text-slate-400 hover:border-slate-600'
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                    : 'border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {visibleProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed border-slate-700 px-6 py-16 text-center">
            <FolderKanban className="text-slate-600" size={32} />
            <div>
              <p className="text-base font-medium text-slate-300">
                Os dashboards de Power BI serão publicados em breve.
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Edite{' '}
                <code className="rounded bg-slate-800 px-1.5 py-0.5 text-cyan-400">
                  src/data/projects.ts
                </code>{' '}
                para adicionar os projetos reais.
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
