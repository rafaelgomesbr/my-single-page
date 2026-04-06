import { Container } from '../layout/Container'

export function SiteFooter() {
  return (
    <footer className="py-10">
      <Container>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Rafael Souza Gomes
          </p>
          <a
            href="#home"
            className="text-xs font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </Container>
    </footer>
  )
}
