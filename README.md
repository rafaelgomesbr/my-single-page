# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Portfólio SPA — Rafael Souza Gomes

  SPA pessoal moderna e minimalista, construída com React + TypeScript + Tailwind, pronta para publicação e escalável para futuros projetos.

  ## Rodar localmente

  ```bash
  npm install
  npm run dev
  ```

  ## Build de produção

  ```bash
  npm run build
  npm run preview
  ```

  ## Estrutura principal

  ```text
  src/
    components/
      layout/
      sections/
      ui/
    data/
      profile.ts
    types/
      portfolio.ts
    App.tsx
    index.css
  ```

  ## Personalização rápida

  1. Edite os dados em `src/data/profile.ts` (nome, bio, skills, experiência e projetos).
  2. Troque capa/thumbnail dos projetos ajustando `image` em cada item de `projects`.
  3. Ajuste tipografia/paleta em `src/index.css` e classes Tailwind dos componentes.
  4. Atualize metadados SEO em `index.html`.

  ## Design base

  - Paleta: Slate neutro (`slate-50` a `slate-950`) para visual premium e profissional.
  - Tipografia: Inter (texto) + Manrope (títulos).
  - Modo escuro com persistência em `localStorage`.
  - Componentização por seção para facilitar expansão sem retrabalho.
        tsconfigRootDir: import.meta.dirname,
