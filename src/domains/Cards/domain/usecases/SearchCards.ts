import { CardSearchQuery } from '../models/CardSearchQuery';
import { CardSearchResult } from '../models/CardSearchResult';
import type { CardsRepository } from '../repositories/CardsRepository';

import type { UseCase } from '@/lib/usecase/UseCase';

export interface SearchCardsParams {
  readonly query: string;
  readonly signal?: AbortSignal;
}

export class SearchCards implements UseCase<SearchCardsParams, CardSearchResult> {
  constructor(private readonly cardsRepository: CardsRepository) {}

  async execute(params: SearchCardsParams): Promise<CardSearchResult> {
    const searchQuery = CardSearchQuery.create(params.query);
    const cards = await this.cardsRepository.search(searchQuery, params.signal);

    return CardSearchResult.create(searchQuery, cards);
  }
}
