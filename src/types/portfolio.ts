export type NavItem = {
  id: string
  label: string
}

export type HeroContent = {
  name: string
  title: string
  intro: string
  ctaPrimary: {
    label: string
    href: string
  }
  ctaSecondary: {
    label: string
    href: string
  }
}

export type AboutContent = {
  summary: string
  strengths: string[]
  differentiators: string[]
}

export type SkillCategory = {
  category: string
  items: string[]
}

export type ExperienceItem = {
  period: string
  title: string
  subtitle: string
  description: string
}

export type ProjectItem = {
  name: string
  description: string
  stack: string[]
  image: string
  demoUrl: string
  repoUrl: string
}

export type ContactContent = {
  email: string
  linkedin: string
  github: string
  finalCta: string
}

export type PortfolioData = {
  nav: NavItem[]
  hero: HeroContent
  about: AboutContent
  skills: SkillCategory[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  contact: ContactContent
}
