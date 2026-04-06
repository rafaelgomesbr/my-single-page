import type { HeroContent, NavItem } from '../../types/portfolio'
import type { Lang } from '../../i18n'
import { useI18n } from '../../i18n'
import { Container } from '../layout/Container'
import { ThemeToggle } from '../ui/ThemeToggle'
import { LangToggle } from '../ui/LangToggle'

type HeroSectionProps = {
  hero: HeroContent
  nav: NavItem[]
  isDark: boolean
  onToggleTheme: () => void
  lang: Lang
  onToggleLang: () => void
}

export function HeroSection({ hero, nav, isDark, onToggleTheme, lang, onToggleLang }: HeroSectionProps) {
  const t = useI18n()
  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 pb-16 pt-6 sm:pb-24 sm:pt-8 dark:border-slate-800/60">
      <span className="hero-orb hero-orb--left" aria-hidden="true" />
      <span className="hero-orb hero-orb--right" aria-hidden="true" />

      {/* ----- Nav / Top bar ----- */}
      <Container>
        <div className="reveal-up mb-14 flex flex-wrap items-center justify-between gap-4 sm:mb-20">
          <a
            href="#home"
            className="text-base font-bold tracking-tight text-slate-900 dark:text-slate-50"
          >
            rafael<span className="text-sky-500">.</span>sg
          </a>
          <div className="flex items-center gap-3">
            <nav aria-label="Navegação principal" className="hidden md:block">
              <ul className="flex items-center gap-6 text-[13px] font-medium text-slate-500 dark:text-slate-400">
                {nav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="transition hover:text-slate-900 dark:hover:text-slate-100"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <LangToggle lang={lang} onToggle={onToggleLang} />
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </div>
        </div>

        {/* ----- Hero content ----- */}
        <div className="flex flex-col-reverse items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
          <span className="reveal-up reveal-delay-1 mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.heroStatus}
          </span>

          <h1 className="reveal-up reveal-delay-1 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1] dark:text-slate-50">
            {hero.name}
          </h1>

          <p className="reveal-up reveal-delay-2 mt-5 text-lg font-medium text-slate-600 sm:text-xl dark:text-slate-300">
            {hero.title}
          </p>

          <p className="reveal-up reveal-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-[17px] dark:text-slate-400">
            {hero.intro}
          </p>

          <div className="reveal-up reveal-delay-3 mt-10 flex flex-wrap gap-3">
            <a
              href={hero.ctaPrimary.href}
              className="group relative inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-100 dark:text-slate-900 dark:shadow-slate-100/5 dark:hover:bg-white"
            >
              {hero.ctaPrimary.label}
              <svg className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-500"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
          </div>

          {/* ----- Profile photo ----- */}
          <div className="reveal-up reveal-delay-2 shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 opacity-20 blur-md" />
              <img
                src="/Eu.png"
                alt="Rafael Souza Gomes"
                className="relative h-32 w-32 rounded-full border-2 border-white/80 object-cover shadow-xl sm:h-40 sm:w-40 lg:h-48 lg:w-48 dark:border-slate-800"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
