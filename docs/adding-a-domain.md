# Adding a functional domain

Checklist for a new feature under `src/domains/<Name>/`.

## 1. Scaffold folders

```
domains/MyFeature/
├── presentation/
│   ├── pages/
│   ├── components/
│   └── hooks/
├── domain/
│   ├── models/
│   ├── repositories/
│   └── usecases/
├── data/
│   ├── api/
│   ├── dto/
│   ├── mappers/
│   ├── datasources/
│   └── repositories/
├── store/          # if Redux+saga needed
├── di/
│   └── container.ts
└── i18n/
    └── en.json
```

Skip `domain/`, `data/`, `store/` for read-only/static pages (see `Home`).

## 2. Domain layer

- Define models in `domain/models/`.
- Define `MyRepository` interface in `domain/repositories/`.
- Add use case(s) in `domain/usecases/` that only depend on the interface.

## 3. Data layer

- DTOs matching API JSON in `data/dto/`.
- API client functions in `data/api/`.
- `data/mappers/` — DTO → domain.
- Repository impl implements the domain interface.
- Optional: DataStore + Factory pattern for multiple sources.

## 4. DI

Wire in `di/container.ts`:

```typescript
const repository = new MyDataRepository(...);
export const myContainer = { myUseCase: new MyUseCase(repository) };
```

## 5. Redux (optional)

- Slice in `store/mySlice.ts`.
- Saga calls `myContainer.myUseCase.execute()` — never the API directly.
- Register reducer in `src/store/store.ts` and saga in `src/store/rootSaga.ts`.

## 6. Presentation

- Hooks: `useSelector` / `dispatch` or local state.
- Mappers: domain → view models in `presentation/mappers/`.
- Pages registered in `src/shared/routes/index.tsx`.

## 7. i18n

- Add `domains/MyFeature/i18n/en.json`.
- Merge namespace in `src/shared/i18n/config.ts`.

## 8. Tests

Mirror structure under `src/test/domains/MyFeature/`:

- `domain/usecases/*.test.ts`
- `data/**/*.test.ts`
- `store/*.test.ts` (if sagas)
- `presentation/**/*.test.tsx`

## 9. Boundaries

Run `npm run lint` — ensure `presentation/` does not import `data/`.
