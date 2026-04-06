import type { SkillCategory } from '../../types/portfolio'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'

type SkillsSectionProps = {
  skills: SkillCategory[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const icons = [
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>,
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.194-.14 1.743" /></svg>,
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>,
  ]
  const colors = [
    'bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400',
    'bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400',
    'bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400',
  ]

  return (
    <section id="skills" className="border-b border-slate-200/60 py-16 sm:py-24 dark:border-slate-800/60">
      <Container>
        <SectionHeading
          overline="Skills"
          title="Stack técnica"
          description="Combinação de tecnologias front-end modernas, ferramentas de infraestrutura e práticas de engenharia que garantem entregas rápidas e sustentáveis."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((group, i) => (
            <article
              key={group.category}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="mb-4 flex items-center gap-2.5">
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${colors[i % 3]}`}>
                  {icons[i % 3]}
                </span>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{group.category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
