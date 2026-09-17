import type { Card } from '../models/Card';
import type { CardSearchQuery } from '../models/CardSearchQuery';

export interface CardsRepository {
  search(query: CardSearchQuery, signal?: AbortSignal): Promise<Card[]>;
}
