import { motion } from 'framer-motion'
import { BarChart3, Database, Workflow, Cpu, Server } from 'lucide-react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { skillCategories } from '../data/skills'

const CATEGORY_ICONS: Record<string, typeof Database> = {
  bi: BarChart3,
  database: Database,
  'data-engineering': Workflow,
  automation: Cpu,
  systems: Server,
}

export function Skills() {
  return (
    <section id="tecnologias" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Stack técnica"
          title="Tecnologias e competências"
          description="Ferramentas e tecnologias que utilizo profissionalmente no dia a dia de dados e BI."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.id] ?? Database
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-colors hover:border-cyan-500/30"
              >
                <Icon className="text-cyan-400" size={22} />
                <h3 className="mt-4 text-base font-semibold text-slate-100">{category.title}</h3>
                <ul className="mt-4 space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-400">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-400/70" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
