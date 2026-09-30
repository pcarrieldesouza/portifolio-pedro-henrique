import { ExternalLink } from 'lucide-react'
import type { BIProject } from '../data/projects'

interface ProjectCardProps {
  project: BIProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLink = Boolean(project.dashboardUrl && project.dashboardUrl.trim().length > 0)

  const CardMedia = (
    <div className="aspect-video w-full overflow-hidden bg-slate-800">
      {project.image ? (
        <img
          src={project.image}
          alt={`Capa do dashboard ${project.title}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm text-slate-600">
          Sem imagem
        </div>
      )}
    </div>
  )

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 transition-colors hover:border-cyan-500/30">
      {CardMedia}

      <div className="p-6">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
          {project.category}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-slate-100">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasLink ? (
          <a
            href={project.dashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
          >
            Visualizar dashboard
            <ExternalLink size={15} />
          </a>
        ) : (
          <span className="mt-6 flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-500">
            Link em breve
          </span>
        )}
      </div>
    </article>
  )
}
