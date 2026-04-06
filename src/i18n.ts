import { createContext, useContext } from 'react'

export type Lang = 'pt' | 'en'

type I18nStrings = {
  heroStatus: string
  aboutOverline: string
  aboutTitle: string
  aboutStrengths: string
  aboutDifferentiators: string
  skillsOverline: string
  skillsTitle: string
  skillsDescription: string
  experienceOverline: string
  experienceTitle: string
  experienceDescription: string
  projectsOverline: string
  projectsTitle: string
  projectsDescription: string
  projectLive: string
  projectViewApp: string
  projectLinkedIn: string
  projectCode: string
  projectNda: string
  contactOverline: string
  contactTitle: string
  contactDescription: string
  footerBackToTop: string
  footerBuiltWith: string
}

const strings: Record<Lang, I18nStrings> = {
  pt: {
    heroStatus: 'Disponível para oportunidades',
    aboutOverline: 'Sobre',
    aboutTitle: 'Quem sou eu',
    aboutStrengths: 'O que entrego',
    aboutDifferentiators: 'Diferenciais',
    skillsOverline: 'Stack',
    skillsTitle: 'Tecnologias & Ferramentas',
    skillsDescription: 'O que uso no dia a dia para entregar interfaces rápidas, acessíveis e fáceis de manter.',
    experienceOverline: 'Trajetória',
    experienceTitle: 'Onde já atuei',
    experienceDescription: 'Evolução real, empresa por empresa.',
    projectsOverline: 'Cases',
    projectsTitle: 'Produtos reais, impacto real',
    projectsDescription: 'Projeto pessoal publicado + cases corporativos sob NDA com entrega de resultado em ambiente de alta exigência.',
    projectLive: 'Live',
    projectViewApp: 'Ver App',
    projectLinkedIn: 'LinkedIn',
    projectCode: 'Código',
    projectNda: 'Projeto sob NDA',
    contactOverline: 'Contato',
    contactTitle: 'Vamos conversar?',
    contactDescription: 'Escolha o canal que preferir — respondo rápido.',
    footerBackToTop: 'Voltar ao topo ↑',
    footerBuiltWith: 'Feito com React, Tailwind CSS e bom gosto.',
  },
  en: {
    heroStatus: 'Open to opportunities',
    aboutOverline: 'About',
    aboutTitle: 'Who I am',
    aboutStrengths: 'What I deliver',
    aboutDifferentiators: 'Differentiators',
    skillsOverline: 'Stack',
    skillsTitle: 'Technologies & Tools',
    skillsDescription: 'What I use daily to ship fast, accessible, and maintainable interfaces.',
    experienceOverline: 'Experience',
    experienceTitle: 'Where I\'ve worked',
    experienceDescription: 'Real career path, company by company.',
    projectsOverline: 'Projects',
    projectsTitle: 'Real products, real impact',
    projectsDescription: 'Published side project + corporate cases under NDA with high-stakes delivery.',
    projectLive: 'Live',
    projectViewApp: 'View App',
    projectLinkedIn: 'LinkedIn',
    projectCode: 'Code',
    projectNda: 'Under NDA',
    contactOverline: 'Contact',
    contactTitle: 'Let\'s talk?',
    contactDescription: 'Pick your preferred channel — I reply fast.',
    footerBackToTop: 'Back to top ↑',
    footerBuiltWith: 'Built with React, Tailwind CSS and good taste.',
  },
}

const I18nContext = createContext<I18nStrings>(strings.pt)

export function useI18n() {
  return useContext(I18nContext)
}

export function getStrings(lang: Lang) {
  return strings[lang]
}

export { I18nContext }
