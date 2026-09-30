import { Container } from './Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 py-8">
      <Container className="flex flex-col items-center justify-between gap-2 text-sm text-slate-500 md:flex-row">
        <p>Desenvolvido por Pedro Henrique.</p>
        <p>&copy; {year} Pedro Henrique Carriel de Souza</p>
      </Container>
    </footer>
  )
}
