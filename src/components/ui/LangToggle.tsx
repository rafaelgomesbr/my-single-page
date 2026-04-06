import type { Lang } from '../../i18n'

type LangToggleProps = {
  lang: Lang
  onToggle: () => void
}

export function LangToggle({ lang, onToggle }: LangToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      title={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      className="flex h-8 items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2.5 text-xs font-semibold text-slate-600 backdrop-blur transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-100"
    >
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
      {lang === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}
