import type { ExperienceItem } from '../../types/portfolio'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'

type ExperienceSectionProps = {
  experience: ExperienceItem[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="border-b border-slate-200/60 py-16 sm:py-24 dark:border-slate-800/60"
    >
      <Container>
        <SectionHeading
          overline="Trajetória"
          title="Onde já atuei"
          description="Experiência profissional com foco em produtos digitais, front-end de escala e melhoria contínua."
        />

        <ol className="relative space-y-10 border-l-2 border-slate-200 pl-8 dark:border-slate-800">
          {experience.map((item, i) => (
            <li key={`${item.period}-${item.title}`} className="relative">
              <span
                className={`absolute -left-[33px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                  i === 0
                    ? 'border-sky-500 bg-sky-500 dark:border-sky-400 dark:bg-sky-400'
                    : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'
                }`}
              >
                {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                {item.period}
              </p>
              <h3 className="mt-1.5 text-base font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.subtitle}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
