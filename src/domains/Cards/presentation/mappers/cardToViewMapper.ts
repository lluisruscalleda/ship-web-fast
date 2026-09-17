import type { Card } from '../../domain/models/Card';
import type { CardViewModel } from '../models/CardViewModel';

export function cardToViewMapper(card: Card): CardViewModel {
  return {
    id: card.id,
    name: card.name,
    manaCost: card.manaCost ?? '—',
    typeLine: card.typeLine ?? '',
    imageUrl: card.imageUrl,
    detailUrl: undefined,
  };
}

export function cardListToViewMapper(cards: readonly Card[]): CardViewModel[] {
  return cards.map(cardToViewMapper);
}
