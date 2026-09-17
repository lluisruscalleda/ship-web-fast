# Styling — ITCSS concepts with Tailwind

This template uses **Tailwind CSS** instead of SCSS, but keeps the same **separation of concerns** as ITCSS.

## Layer mapping

| ITCSS | Tailwind equivalent | Location |
|-------|---------------------|----------|
| Settings | Design tokens | `tailwind.config.ts` |
| Tools | `cn()` helper | `src/shared/utils/cn.ts` |
| Generic | Base resets | `src/styles/03-generic/` |
| Elements | Tag styles (`body`, `a`) | `src/styles/04-elements/` |
| Objects | Layout patterns (`.o-container`) | `src/styles/05-objects/` |
| Components | `cva` variants | `*/buttonVariants.ts` + JSX classes |

## Rules

1. **Tokens only in config** — colors, spacing, fonts live in `tailwind.config.ts`.
2. **Reusable layout** — use `o-*` classes from `05-objects/`, not ad-hoc margins on every page.
3. **Component variants** — use `class-variance-authority` (`cva`) for Button, etc.
4. **One-off utilities** — Tailwind classes directly in JSX are fine.
5. **No SCSS / CSS Modules** in this template.

## Example: Button

```typescript
// buttonVariants.ts — component "module"
export const buttonVariants = cva('...', { variants: { ... } });

// Button.tsx
<button className={cn(buttonVariants({ variant, size }), className)} />
```

## Example: page layout

```tsx
<div className="o-container py-8">
  <header className="o-page-header">...</header>
  <div className="o-stack">...</div>
</div>
```
