import { useEffect, useState } from 'react'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SiteFooter } from './components/sections/SiteFooter'
import { SkillsSection } from './components/sections/SkillsSection'
import { portfolioData } from './data/profile'
import { portfolioDataEn } from './data/profile-en'
import { I18nContext, getStrings, type Lang } from './i18n'

function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = window.localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [lang, setLang] = useState<Lang>(() => {
    const saved = window.localStorage.getItem('lang') as Lang | null
    if (saved === 'en' || saved === 'pt') return saved
    return navigator.language.startsWith('en') ? 'en' : 'pt'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
    window.localStorage.setItem('lang', lang)
  }, [lang])

  const data = lang === 'en' ? portfolioDataEn : portfolioData
  const strings = getStrings(lang)

  return (
    <I18nContext.Provider value={strings}>
      <div
        id="home"
        className="texture-grid min-h-screen bg-slate-50 text-slate-700 transition-colors dark:bg-slate-950"
      >
        <HeroSection
          hero={data.hero}
          nav={data.nav}
          isDark={isDark}
          onToggleTheme={() => setIsDark((value) => !value)}
          lang={lang}
          onToggleLang={() => setLang((l) => (l === 'pt' ? 'en' : 'pt'))}
        />
        <main>
          <AboutSection content={data.about} />
          <SkillsSection skills={data.skills} />
          <ExperienceSection experience={data.experience} />
          <ProjectsSection projects={data.projects} />
          <ContactSection contact={data.contact} />
        </main>
        <SiteFooter />
      </div>
    </I18nContext.Provider>
  )
}

export default App
