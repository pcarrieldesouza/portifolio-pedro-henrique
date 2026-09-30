import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'
import { siteConfig } from '../config/site'
import { LinkedinIcon } from './icons'

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos BI' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#formacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        isScrolled
          ? 'border-slate-800 bg-[#0a0e17]/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a
          href="#topo"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setIsOpen(false)
          }}
          className="font-mono text-lg font-bold text-slate-100"
        >
          Pedro Henrique<span className="text-cyan-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(link.href)
              }}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
          >
            <LinkedinIcon width={16} height={16} />
            LinkedIn
          </a>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick('#contato')
            }}
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
          >
            Entre em contato
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 lg:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {isOpen && (
        <nav className="border-t border-slate-800 bg-[#0a0e17] px-6 pb-6 pt-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-300 hover:bg-slate-800/60 hover:text-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200"
            >
              <LinkedinIcon width={16} height={16} />
              Ver LinkedIn
            </a>
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick('#contato')
              }}
              className="rounded-lg bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Entre em contato
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
