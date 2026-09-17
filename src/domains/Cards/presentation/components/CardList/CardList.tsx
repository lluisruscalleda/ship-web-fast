import type { CardViewModel } from '../../models/CardViewModel';
import { CardRow } from '../CardRow/CardRow';

interface CardListProps {
  cards: CardViewModel[];
}

export function CardList({ cards }: CardListProps) {
  if (cards.length === 0) {
    return null;
  }

  return (
    <ul className="o-stack">
      {cards.map((card) => (
        <CardRow key={card.id} card={card} />
      ))}
    </ul>
  );
}
