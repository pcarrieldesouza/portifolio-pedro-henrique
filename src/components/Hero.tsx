import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from './Container'
import { siteConfig } from '../config/site'
import { LinkedinIcon } from './icons'

const BADGES = ['Power BI', 'SQL', 'Python', 'Pentaho / ETL', 'PostgreSQL']

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="topo" className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(34,211,238,0.10), transparent 40%), radial-gradient(circle at 85% 0%, rgba(56,189,248,0.08), transparent 45%)',
        }}
      />
      <Container className="grid items-center gap-16 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Analista de Dados • Curitiba, Brasil
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-100 md:text-5xl lg:text-6xl">
            Transformando dados em{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              decisões inteligentes.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Olá, sou Pedro Henrique, Analista de Dados Pleno na Ligga Telecom. Atuo com Business
            Intelligence, integração e transformação de dados, automação de processos e desenvolvimento
            de soluções analíticas que apoiam a tomada de decisão.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Minha experiência conecta tecnologia e negócio, combinando SQL, Power BI, Python e processos
            de ETL para transformar dados em informações estratégicas.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-700 bg-slate-900/60 px-3.5 py-1.5 text-sm font-medium text-slate-300"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={scrollToProjects}
              className="flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-cyan-400"
            >
              Explorar projetos
              <ArrowRight size={16} />
            </button>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
            >
              <LinkedinIcon width={16} height={16} />
              Ver LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="mx-auto w-full max-w-xs md:max-w-sm"
        >
          <div className="relative aspect-square">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full bg-cyan-500/20 blur-2xl"
            />
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-cyan-400/40 shadow-[0_0_60px_-15px_rgba(34,211,238,0.5)]">
              <img
                src="/images/pedro-henrique.jpeg"
                alt="Foto de Pedro Henrique Carriel de Souza"
                className="h-full w-full object-cover"
                width={480}
                height={480}
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
