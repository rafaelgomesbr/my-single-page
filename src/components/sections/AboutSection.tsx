import type { AboutContent } from '../../types/portfolio'
import { useI18n } from '../../i18n'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'

type AboutSectionProps = {
  content: AboutContent
}

export function AboutSection({ content }: AboutSectionProps) {
  const t = useI18n()
  return (
    <section id="about" className="border-b border-slate-200/60 py-16 sm:py-24 dark:border-slate-800/60">
      <Container>
        <SectionHeading overline={t.aboutOverline} title={t.aboutTitle} description={content.summary} />

        <div className="grid gap-5 sm:grid-cols-2">
          <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              </span>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t.aboutStrengths}</h3>
            </div>
            <ul className="space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {content.strengths.map((strength) => (
                <li key={strength} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  {strength}
                </li>
              ))}
            </ul>
          </article>

          <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </span>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t.aboutDifferentiators}</h3>
            </div>
            <ul className="space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {content.differentiators.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  )
}
