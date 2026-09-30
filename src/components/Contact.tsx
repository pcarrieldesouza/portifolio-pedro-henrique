import { Mail } from 'lucide-react'
import { Container } from './Container'
import { siteConfig } from '../config/site'
import { GithubIcon, LinkedinIcon } from './icons'

export function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32">
      <Container>
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-900/20 px-6 py-16 text-center md:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
            Vamos transformar dados em resultados?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            Estou aberto a oportunidades e conexões profissionais nas áreas de Dados, Business
            Intelligence, Analytics e Engenharia de Dados.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
            >
              <LinkedinIcon width={17} height={17} />
              LinkedIn
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
            >
              <GithubIcon width={17} height={17} />
              GitHub
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
            >
              <Mail size={17} />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
