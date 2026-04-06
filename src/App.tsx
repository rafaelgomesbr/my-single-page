import { useEffect, useState } from 'react'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SiteFooter } from './components/sections/SiteFooter'
import { SkillsSection } from './components/sections/SkillsSection'
import { portfolioData } from './data/profile'

function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = window.localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div
      id="home"
      className="texture-grid min-h-screen bg-slate-50 text-slate-700 transition-colors dark:bg-slate-950"
    >
      <HeroSection
        hero={portfolioData.hero}
        nav={portfolioData.nav}
        isDark={isDark}
        onToggleTheme={() => setIsDark((value) => !value)}
      />
      <main>
        <AboutSection content={portfolioData.about} />
        <SkillsSection skills={portfolioData.skills} />
        <ExperienceSection experience={portfolioData.experience} />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactSection contact={portfolioData.contact} />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
