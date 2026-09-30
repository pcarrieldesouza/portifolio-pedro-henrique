import { motion } from 'framer-motion'
import { Database, GitBranch, LineChart } from 'lucide-react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

const PILLARS = [
  {
    icon: Database,
    title: 'Dados',
    text: 'Modelagem, consultas SQL, views e procedures, estruturação de informações para análises operacionais e gerenciais.',
  },
  {
    icon: GitBranch,
    title: 'Tecnologia',
    text: 'Pipelines de ETL com Pentaho, integração via APIs/OData, automações em Python e suporte a bancos PostgreSQL e SQL Server.',
  },
  {
    icon: LineChart,
    title: 'Negócio',
    text: 'Dashboards e relatórios gerenciais em Power BI que traduzem dados em indicadores estratégicos para tomada de decisão.',
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Sobre mim" title="Conectando dados, tecnologia e negócio" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-5 text-base leading-relaxed text-slate-400">
            <p>
              Sou profissional de Dados e Tecnologia, com experiência em Business Intelligence, análise
              de dados, estruturação de informações e desenvolvimento de soluções para diferentes áreas
              de negócio.
            </p>
            <p>
              Ao longo da minha trajetória, trabalhei com desenvolvimento de dashboards, relatórios
              gerenciais, consultas SQL, modelagem de dados, automações em Python e integração de
              informações entre sistemas corporativos.
            </p>
            <p>
              Atualmente, atuo como Analista de Dados Pleno na Ligga Telecom, com foco em processos de
              ETL, integração de dados via APIs, bancos de dados e suporte às soluções analíticas
              utilizadas pela empresa.
            </p>
            <p>
              Minha experiência em tecnologia, suporte, planejamento e áreas de negócio me permite
              compreender as necessidades dos usuários e transformá-las em soluções orientadas a dados.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-colors hover:border-cyan-500/30"
              >
                <Icon className="text-cyan-400" size={22} />
                <h3 className="mt-4 text-base font-semibold text-slate-100">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
