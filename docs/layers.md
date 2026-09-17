# Layer rules

Enforced by `eslint-plugin-boundaries` in `eslint.config.js`.

## Import matrix

| From | May import |
|------|------------|
| `domains/*/presentation/**` | `../domain/**`, `shared/**` |
| `domains/*/domain/**` | `shared/**` (minimal) |
| `domains/*/data/**` | `../domain/**`, `lib/**`, `shared/**` |
| `shared/**` | `lib/**` |

## Exemptions

These paths are ignored by boundary rules (wiring / tests):

- `src/domains/*/di/**`
- `src/domains/*/store/**`
- `src/store/**`
- `src/test/**`
- `**/*.test.ts`, `**/*.test.tsx`

## Common violations

**Bad** — presentation imports API client:

```typescript
// domains/Cards/presentation/hooks/useCards.ts
import { scryfallApi } from '../../data/api/scryfallApi'; // ESLint error
```

**Good** — dispatch to saga, saga calls use case:

```typescript
dispatch(searchCardsRequest());
// saga → cardsContainer.searchCards.execute(query)
```

**Bad** — domain imports axios:

```typescript
import axios from 'axios'; // should not appear in domain/
```

## Adding layers to a new domain

1. Start with `domain/repositories/MyRepository.ts` (interface).
2. Add `domain/usecases/` that depend only on the interface.
3. Implement `data/repositories/` + `data/api/`.
4. Wire in `di/container.ts`.
5. Consume from `presentation/hooks/` via Redux saga or direct call (prefer saga for async flows).
