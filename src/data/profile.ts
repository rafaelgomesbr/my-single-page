import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  nav: [
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Trajetória' },
    { id: 'projects', label: 'Cases' },
    { id: 'contact', label: 'Contato' },
  ],
  hero: {
    name: 'Rafael Souza Gomes',
    title: 'Front-end Engineer · +5 anos construindo produtos digitais de escala',
    intro:
      'Front-end sênior com +4 anos na Cielo, atuando na construção e evolução de interfaces que atendem milhões de usuários. Foco em performance, qualidade de código e experiência real do cliente.',
    ctaPrimary: {
      label: 'Entre em contato',
      href: '#contact',
    },
    ctaSecondary: {
      label: 'Ver cases',
      href: '#projects',
    },
  },
  about: {
    summary:
      'Bacharel em Sistemas de Informação pela UNIFESSPA, com trajetória sólida em produtos digitais de grande escala. Atuo no dia a dia com arquitetura front-end, padronização técnica, code review e colaboração com times multidisciplinares.',
    strengths: [
      'Arquitetura front-end escalável para produtos de alto tráfego',
      'Obsessão por performance, acessibilidade e experiência fluida',
      'Padronização técnica que reduz retrabalho e acelera entregas',
    ],
    differentiators: [
      'Experiência real com React e Angular em escala corporativa (Cielo)',
      'Pipeline completa: CI/CD, qualidade de código, observabilidade',
      'Apoio técnico constante a outros devs do time no dia a dia',
    ],
  },
  skills: [
    {
      category: 'Front-end core',
      items: ['React', 'Angular 2+', 'AngularJS', 'TypeScript', 'JavaScript ES6+', 'Sass / Less'],
    },
    {
      category: 'Infra & tooling',
      items: ['Node.js', 'Webpack', 'Gulp', 'Jenkins', 'Kubernetes', 'SonarQube'],
    },
    {
      category: 'Engenharia & processo',
      items: ['CI/CD pipelines', 'Code review', 'Testes (Jasmine)', 'Acessibilidade (a11y)', 'Figma → código', 'Git flow'],
    },
  ],
  experience: [
    {
      period: 'mar 2024 — presente',
      title: 'Front-end Engineer, Senior',
      subtitle: 'Cielo · Barueri, SP',
      description:
        'Atuo nos canais digitais estratégicos que processam milhões de transações, participando de definições técnicas e da evolução da arquitetura front-end. Contribuo com padrões de desenvolvimento, code review e melhoria contínua do codebase. Stack: React, AngularJS, Angular 12, Jenkins, K8s.',
    },
    {
      period: 'fev 2022 — mar 2024',
      title: 'Front-end Engineer, Mid-level',
      subtitle: 'Cielo · Barueri, SP',
      description:
        'Desenvolvimento e manutenção de interfaces responsivas e performáticas em ambiente ágil de alta complexidade. Forte contribuição em qualidade de código com SonarQube, testes Jasmine e pipelines de CI/CD com Jenkins e Kubernetes.',
    },
    {
      period: 'jun 2021 — nov 2021',
      title: 'Front-end Developer',
      subtitle: 'act digital · SafraPay',
      description:
        'Desenvolvi componentes e telas para a plataforma multicanais SafraPay utilizando AngularJS e Angular 2+, com integração de design via Figma e automação de build com Gulp e Node.js.',
    },
    {
      period: 'set 2020 — jun 2021',
      title: 'Front-end Developer',
      subtitle: 'Sankhya Gestão de Negócios · Uberlândia, MG',
      description:
        'Mantive e evoluí o framework JavaScript interno e componentes reutilizáveis da plataforma de produtos, atuando também como suporte técnico para o time de front-end.',
    },
    {
      period: 'out 2017 — abr 2018',
      title: 'Analista de TI',
      subtitle: 'SEMAS · Marabá, PA',
      description:
        'Primeiro contato profissional com TI no setor público, atuando em suporte técnico e atividades de infraestrutura.',
    },
  ],
  projects: [
    {
      name: 'Gamora — Flashcards com IA',
      description:
        'App próprio de flashcards inteligentes com geração de conteúdo via Gemini, pagamento por Stripe e suporte cross-platform via Capacitor. Projeto pessoal em desenvolvimento ativo.',
      stack: ['Angular', 'Firebase', 'Gemini AI', 'Stripe', 'Capacitor', 'Sass'],
      images: ['/gamora-1.png', '/gamora-2.png', '/gamora-3.png'],
      demoUrl: 'https://gamora.app',
      repoUrl: 'https://github.com/rafaelgomesbr/rafa-flash-cards',
    },
    {
      name: 'Cielo — Canais Digitais',
      description:
        'Arquitetura e evolução de interfaces de alto tráfego nos canais digitais da maior adquirente da América Latina. Foco em performance, padrões técnicos e sustentabilidade de código em múltiplos produtos simultâneos.',
      stack: ['React', 'AngularJS', 'Angular 12', 'Jenkins', 'K8s'],
      images: [],
      demoUrl: 'https://www.linkedin.com/in/rafaelgomesbr/',
      repoUrl: 'https://github.com/rafaelgomesbr',
    },
    {
      name: 'SafraPay — Plataforma Multicanais',
      description:
        'Desenvolvimento de interfaces modernas para a plataforma de pagamentos do Banco Safra, com componentização robusta e entrega contínua em ciclos de sprint curtos.',
      stack: ['Angular 2+', 'AngularJS', 'Node.js', 'Gulp', 'Less'],
      images: [],
      demoUrl: 'https://www.linkedin.com/in/rafaelgomesbr/',
      repoUrl: 'https://github.com/rafaelgomesbr',
    },
    {
      name: 'Sankhya — Design System interno',
      description:
        'Manutenção e evolução do framework de componentes web reutilizáveis utilizado em toda a suíte de produtos Sankhya, aumentando consistência visual e produtividade do time.',
      stack: ['JavaScript', 'AngularJS', 'Java', 'Git'],
      images: [],
      demoUrl: 'https://www.linkedin.com/in/rafaelgomesbr/',
      repoUrl: 'https://github.com/rafaelgomesbr',
    },
  ],
  contact: {
    email: 'rafael.sgomesbr@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rafaelgomesbr/',
    github: 'https://github.com/rafaelgomesbr',
    finalCta: 'Aberto a novos desafios e oportunidades que envolvam produto, escala e qualidade técnica.',
  },
}
