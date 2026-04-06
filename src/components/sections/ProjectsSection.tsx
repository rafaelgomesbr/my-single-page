import React, { useState } from 'react'
import type { ProjectItem } from '../../types/portfolio'
import { useI18n } from '../../i18n'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'

const corporateGradients: Record<string, string> = {
  Cielo: 'from-green-400/20 via-emerald-500/10 to-teal-600/20 dark:from-green-500/15 dark:via-emerald-600/10 dark:to-teal-700/15',
  SafraPay: 'from-blue-400/20 via-indigo-500/10 to-violet-600/20 dark:from-blue-500/15 dark:via-indigo-600/10 dark:to-violet-700/15',
  Sankhya: 'from-orange-400/20 via-amber-500/10 to-yellow-600/20 dark:from-orange-500/15 dark:via-amber-600/10 dark:to-yellow-700/15',
}

const corporateIcons: Record<string, React.ReactNode> = {
  Cielo: (
    <svg className="h-10 w-10 text-emerald-500/40 dark:text-emerald-400/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>
  ),
  SafraPay: (
    <svg className="h-10 w-10 text-indigo-500/40 dark:text-indigo-400/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
    </svg>
  ),
  Sankhya: (
    <svg className="h-10 w-10 text-amber-500/40 dark:text-amber-400/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
    </svg>
  ),
}

function ImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0)

  if (images.length <= 1) {
    return (
      <img
        src={images[0]}
        alt={name}
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    )
  }

  return (
    <div className="relative h-full w-full">
      <img
        src={images[current]}
        alt={`${name} - tela ${current + 1}`}
        className="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-105"
      />
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); setCurrent(i) }}
            className={`h-1.5 rounded-full transition-all ${
              i === current
                ? 'w-4 bg-white shadow-sm'
                : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ver imagem ${i + 1}`}
          />
        ))}
      </div>
      {/* Arrows */}
      <button
        onClick={(e) => { e.preventDefault(); setCurrent((current - 1 + images.length) % images.length) }}
        className="absolute top-1/2 left-2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-black/50"
        aria-label="Anterior"
      >
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
      </button>
      <button
        onClick={(e) => { e.preventDefault(); setCurrent((current + 1) % images.length) }}
        className="absolute top-1/2 right-2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-black/50"
        aria-label="Próxima"
      >
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
      </button>
    </div>
  )
}

type ProjectsSectionProps = {
  projects: ProjectItem[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const t = useI18n()
  return (
    <section id="projects" className="border-b border-slate-200/60 py-16 sm:py-24 dark:border-slate-800/60">
      <Container>
        <SectionHeading
          overline={t.projectsOverline}
          title={t.projectsTitle}
          description={t.projectsDescription}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const shortName = project.name.split(' — ')[0]
            return (
            <article
              key={project.name}
              className={`reveal-up group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 ring-1 ring-emerald-500/20' : ''
              } ${
                index % 3 === 0 ? 'reveal-delay-1' : index % 3 === 1 ? 'reveal-delay-2' : 'reveal-delay-3'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                {project.images.length > 0 ? (
                  <>
                    {project.demoUrl && !project.demoUrl.includes('linkedin') ? (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase backdrop-blur">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                          {t.projectLive}
                        </span>
                      </div>
                    ) : null}
                    <ImageCarousel images={project.images} name={project.name} />
                  </>
                ) : (
                  <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${corporateGradients[shortName] || 'from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900'}`}>
                    <div className="flex flex-col items-center gap-3">
                      {corporateIcons[shortName] || null}
                      <span className="text-2xl font-bold tracking-tight text-slate-300 dark:text-slate-600">
                        {shortName}
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        {t.projectNda}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{project.name}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={`${project.name}-${tech}`}
                      className="rounded-full border border-slate-200 bg-slate-50/80 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-2.5 text-xs">
                  {(() => {
                    const isLiveApp = project.demoUrl && !project.demoUrl.includes('linkedin')
                    const isPublicRepo = project.repoUrl && !project.repoUrl.endsWith('rafaelgomesbr')
                    return (
                      <>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
                        >
                          {isLiveApp ? t.projectViewApp : t.projectLinkedIn}
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                        </a>
                        {isPublicRepo && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
                          >
                            {t.projectCode}
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                          </a>
                        )}
                      </>
                    )
                  })()}
                </div>
              </div>
            </article>
          )})}
        </div>
      </Container>
    </section>
  )
}
