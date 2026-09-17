import type { CardViewModel } from '../../models/CardViewModel';

interface CardRowProps {
  card: CardViewModel;
}

export function CardRow({ card }: CardRowProps) {
  return (
    <li className="flex items-center gap-4 rounded-card border border-zinc-200 bg-white p-3 shadow-sm">
      {card.imageUrl ? (
        <img
          src={card.imageUrl}
          alt={card.name}
          className="h-16 w-auto rounded object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="flex h-16 w-11 items-center justify-center rounded bg-muted text-xs text-muted-foreground">
          MTG
        </div>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-zinc-900">{card.name}</p>
        <p className="text-sm text-zinc-500">{card.manaCost}</p>
        <p className="truncate text-xs text-zinc-400">{card.typeLine}</p>
      </div>
    </li>
  );
}
