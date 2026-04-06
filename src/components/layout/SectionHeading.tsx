type SectionHeadingProps = {
  overline: string
  title: string
  description?: string
}

export function SectionHeading({ overline, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-10 sm:mb-12">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
        {overline}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-[15px] dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </header>
  )
}
