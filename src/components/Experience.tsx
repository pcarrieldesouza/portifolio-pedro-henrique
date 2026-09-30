import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { experiences } from '../data/experience'

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id ?? null)

  return (
    <section id="experiencia" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Trajetória"
          title="Experiência profissional"
          description="Cargos, empresas e períodos resumidos — clique para ver as atividades detalhadas de cada posição."
        />

        <ol className="relative space-y-4 border-l border-slate-800 pl-6 md:pl-8">
          {experiences.map((exp, index) => {
            const isOpen = expandedId === exp.id

            return (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
                className="relative"
              >
                <span
                  className={`absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 md:-left-[39px] ${
                    exp.current
                      ? 'border-cyan-400 bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.15)]'
                      : 'border-slate-600 bg-slate-900'
                  }`}
                  aria-hidden
                />

                <div
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    exp.featured
                      ? 'border-cyan-500/30 bg-cyan-500/[0.04]'
                      : 'border-slate-800 bg-slate-900/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedId(isOpen ? null : exp.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-base font-semibold text-slate-100 md:text-lg">{exp.role}</h3>
                        {exp.current && (
                          <span className="rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-xs font-semibold text-cyan-400">
                            Atual
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-slate-400">
                        {exp.company} · {exp.period}
                      </p>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <ul className="space-y-2.5 border-t border-slate-800/80 px-5 py-5 md:px-6">
                      {exp.activities.map((activity) => (
                        <li key={activity} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400/70" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
