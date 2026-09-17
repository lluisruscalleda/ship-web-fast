import type { Card } from './Card';
import type { CardSearchQuery } from './CardSearchQuery';

export class CardSearchResult {
  readonly query: CardSearchQuery;
  readonly cards: readonly Card[];

  private constructor(query: CardSearchQuery, cards: readonly Card[]) {
    this.query = query;
    this.cards = cards;
  }

  static create(query: CardSearchQuery, cards: Card[]): CardSearchResult {
    return new CardSearchResult(query, Object.freeze([...cards]));
  }

  get count(): number {
    return this.cards.length;
  }

  isEmpty(): boolean {
    return this.cards.length === 0;
  }
}
