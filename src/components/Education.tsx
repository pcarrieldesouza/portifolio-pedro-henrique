import { motion } from 'framer-motion'
import { Award, GraduationCap } from 'lucide-react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { education, certifications } from '../data/education'

export function Education() {
  return (
    <section id="formacao" className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Formação" title="Formação acadêmica e certificações" />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-xl border border-cyan-500/30 bg-cyan-500/[0.04] p-6"
          >
            <GraduationCap className="text-cyan-400" size={24} />
            <h3 className="mt-4 text-base font-semibold text-slate-100">{education.institution}</h3>
            <p className="mt-1 text-sm text-slate-400">{education.course}</p>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <span className="text-slate-500">{education.period}</span>
              <span className="rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-xs font-semibold text-cyan-400">
                {education.status}
              </span>
            </div>
          </motion.div>

          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
                className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <Award className="mt-0.5 shrink-0 text-cyan-400" size={18} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-200">{cert.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {cert.institution} · {cert.year} · {cert.hours}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
