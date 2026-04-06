import type { PortfolioData } from '../types/portfolio'

export const portfolioDataEn: PortfolioData = {
  nav: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    name: 'Rafael Souza Gomes',
    title: 'Front-end Engineer · 5+ years building digital products at scale',
    intro:
      'Senior front-end engineer with 4+ years at Cielo (LATAM\'s largest payment acquirer), building and evolving interfaces that serve millions of users. Focused on performance, code quality, and real customer experience.',
    ctaPrimary: {
      label: 'Get in touch',
      href: '#contact',
    },
    ctaSecondary: {
      label: 'View projects',
      href: '#projects',
    },
  },
  about: {
    summary:
      'BSc in Information Systems from UNIFESSPA, with a strong track record in large-scale digital products. Day-to-day work includes front-end architecture, technical standards, code review, and cross-functional collaboration.',
    strengths: [
      'Scalable front-end architecture for high-traffic products',
      'Obsession with performance, accessibility, and fluid UX',
      'Technical standardization that reduces rework and speeds up delivery',
    ],
    differentiators: [
      'Real-world React & Angular experience at enterprise scale (Cielo)',
      'Full pipeline: CI/CD, code quality, observability',
      'Constant technical support for fellow developers on the team',
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
      category: 'Engineering & process',
      items: ['CI/CD pipelines', 'Code review', 'Testing (Jasmine)', 'Accessibility (a11y)', 'Figma → code', 'Git flow'],
    },
  ],
  experience: [
    {
      period: 'Mar 2024 — present',
      title: 'Front-end Engineer, Senior',
      subtitle: 'Cielo · Barueri, SP',
      description:
        'Working on strategic digital channels that process millions of transactions, contributing to technical decisions and front-end architecture evolution. Active in development standards, code review, and continuous codebase improvement. Stack: React, AngularJS, Angular 12, Jenkins, K8s.',
    },
    {
      period: 'Feb 2022 — Mar 2024',
      title: 'Front-end Engineer, Mid-level',
      subtitle: 'Cielo · Barueri, SP',
      description:
        'Development and maintenance of responsive, performant interfaces in a high-complexity agile environment. Strong contribution to code quality via SonarQube, Jasmine tests, and CI/CD pipelines with Jenkins and Kubernetes.',
    },
    {
      period: 'Jun 2021 — Nov 2021',
      title: 'Front-end Developer',
      subtitle: 'act digital · SafraPay',
      description:
        'Built components and screens for the SafraPay multichannel platform using AngularJS and Angular 2+, with Figma design integration and build automation via Gulp and Node.js.',
    },
    {
      period: 'Sep 2020 — Jun 2021',
      title: 'Front-end Developer',
      subtitle: 'Sankhya Gestão de Negócios · Uberlândia, MG',
      description:
        'Maintained and evolved the internal JavaScript framework and reusable components for the product suite, also providing technical support for the front-end team.',
    },
    {
      period: 'Oct 2017 — Apr 2018',
      title: 'IT Analyst',
      subtitle: 'SEMAS · Marabá, PA',
      description:
        'First professional IT experience in the public sector, working with technical support and infrastructure.',
    },
  ],
  projects: [
    {
      name: 'Gamora — AI Flashcards',
      description:
        'Personal flashcard app with AI-powered content generation via Gemini, Stripe payments, and cross-platform support via Capacitor. Active side project in development.',
      stack: ['Angular', 'Firebase', 'Gemini AI', 'Stripe', 'Capacitor', 'Sass'],
      images: ['/gamora-1.png', '/gamora-2.png', '/gamora-3.png'],
      demoUrl: 'https://gamora.app',
      repoUrl: 'https://github.com/rafaelgomesbr/rafa-flash-cards',
    },
    {
      name: 'Cielo — Digital Channels',
      description:
        'Architecture and evolution of high-traffic interfaces for LATAM\'s largest payment acquirer. Focus on performance, technical standards, and code sustainability across multiple simultaneous products.',
      stack: ['React', 'AngularJS', 'Angular 12', 'Jenkins', 'K8s'],
      images: [],
      demoUrl: 'https://www.linkedin.com/in/rafaelgomesbr/',
      repoUrl: 'https://github.com/rafaelgomesbr',
    },
    {
      name: 'SafraPay — Multichannel Platform',
      description:
        'Development of modern interfaces for Banco Safra\'s payment platform, with robust componentization and continuous delivery in short sprint cycles.',
      stack: ['Angular 2+', 'AngularJS', 'Node.js', 'Gulp', 'Less'],
      images: [],
      demoUrl: 'https://www.linkedin.com/in/rafaelgomesbr/',
      repoUrl: 'https://github.com/rafaelgomesbr',
    },
    {
      name: 'Sankhya — Internal Design System',
      description:
        'Maintenance and evolution of the reusable web component framework used across the entire Sankhya product suite, improving visual consistency and team productivity.',
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
    finalCta: 'Open to new challenges and opportunities involving product, scale, and technical quality.',
  },
}
