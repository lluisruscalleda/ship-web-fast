# Ship Web Fast

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?logo=redux&logoColor=white)
![redux-saga](https://img.shields.io/badge/redux--saga-1-999999?logo=redux&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?logo=reactquery&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-25-26A69A?logo=i18next&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-3-6E9F18?logo=vitest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-3-F7B93E?logo=prettier&logoColor=black)

React + TypeScript SPA template with **Clean Architecture by functional domain**, **Redux Toolkit + redux-saga**, **Tailwind CSS**, and a demo **Magic: The Gathering** card browser powered by the [Scryfall API](https://scryfall.com/docs/api).

Inspired by [Android-CleanArchitecture](https://github.com/android10/Android-CleanArchitecture) and Ship-Android-Fast — not a copy of any admin/auth boilerplate.

## Quick start

```bash
cp .env.template .env
npm install
npm run dev
```

Open http://localhost:5173 — browse **Home** and **Cards** (`/cards`).

## Architecture at a glance

```
domains/Cards/
├── presentation/   # pages, components, hooks (UI)
├── domain/         # use cases, repository interfaces, models
├── data/           # API, DTOs, repository impl, mappers
├── store/          # Redux slice + sagas → use cases
├── di/             # composition root
└── i18n/
```

**Data flow:** `CardsPage` → `useCards` → saga → `SearchCards.execute()` → `CardsRepository` → Scryfall API.

Layer rules are enforced with `eslint-plugin-boundaries`. See [docs/architecture.md](docs/architecture.md).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (proxies `/scryfall-api` → Scryfall) |
| `npm run build` | Typecheck + production build |
| `npm run test` | Vitest watch mode |
| `npm run test:run` | Vitest single run (CI) |
| `npm run lint` | ESLint (zero warnings) |

## Environment

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_SCRYFALL_DEFAULT_QUERY` | `type:creature` | Initial Scryfall search query |

Example queries: `set:lea`, `c:red pow=3`, `order:edhrec`.

## Stack

- React 18, Vite 6, TypeScript (strict)
- Redux Toolkit + redux-saga
- TanStack Query (wired for future domains)
- React Router 6, i18next
- Tailwind CSS + `cva` + `cn()`
- Vitest + Testing Library
- ESLint 9 flat + Prettier + Husky + commitlint

## Attribution

Card data and images © [Scryfall, LLC](https://scryfall.com). Magic: The Gathering is a trademark of Wizards of the Coast. This template is unofficial fan content permitted under the [Wizards Fan Content Policy](https://company.wizards.com/en/legal/fancontentpolicy).

## Documentation

- [Architecture](docs/architecture.md)
- [Layer rules](docs/layers.md)
- [Styling (ITCSS → Tailwind)](docs/styling.md)
- [Scryfall API notes](docs/scryfall-api.md)
- [Adding a domain](docs/adding-a-domain.md)

## License

Apache-2.0
