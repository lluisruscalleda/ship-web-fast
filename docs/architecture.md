# Architecture

## Goals

- **Functional domains** (`domains/Cards`, `domains/Home`) — each feature is self-contained.
- **Clean Architecture layers** inside domains that need I/O: `presentation` → `domain` ← `data`.
- **Redux + saga** orchestrates async work and calls **use cases**, not HTTP clients directly.
- **Shared** UI shell and utilities; **lib** for cross-cutting infra (HTTP client).

## Terminology

| Term | Meaning |
|------|---------|
| Functional domain | Top-level folder under `domains/` (e.g. `Cards`) |
| `domain/` layer | Business logic: use cases, repository interfaces |
| `data/` layer | Scryfall API, DTOs, repository implementation |
| `presentation/` layer | React pages, components, hooks |

## Android → Web mapping

| Ship-Android-Fast | ship-web-fast |
|-------------------|---------------|
| `RepositoriesFragment` | `CardsPage` |
| `RepositoryViewModel` | `cardsSlice` + `useCards` |
| `GetRepoList` | `SearchCards` |
| `GithubRepository` | `CardsRepository` |
| `GithubDataRepository` | `ScryfallCardsRepository` |
| `RepoEntity` / `RepoDomain` | `CardDto` / `CardDomain` |
| Dagger `AppComponent` | `domains/Cards/di/container.ts` |
| RxJava + `UseCase` | redux-saga + `SearchCards` |

## State management

| Concern | Tool |
|---------|------|
| Cards list UI (loading, error, data, query) | Redux + saga |
| Future server cache / CRUD | TanStack Query (installed, optional) |
| Router | React Router |

## Dependency direction

```
presentation → domain ← data → lib (http-client)
```

`presentation` must **never** import from `data/`. Sagas call use cases from `di/container.ts`.

## Thin domains

Not every functional domain needs all layers. `Home` only has `presentation/` and `i18n/` because it has no I/O or business rules.
