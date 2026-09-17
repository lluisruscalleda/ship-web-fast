import type { Card } from '../../domain/models/Card';
import type { CardSearchQuery } from '../../domain/models/CardSearchQuery';
import type { CardsRepository } from '../../domain/repositories/CardsRepository';
import type { ScryfallDataStoreFactory } from '../datasources/ScryfallDataStoreFactory';
import { cardDtoListToDomainMapper } from '../mappers/cardDtoToDomainMapper';
import { mapDataErrorToDomain } from '../mappers/dataErrorToDomainMapper';

export class ScryfallCardsRepository implements CardsRepository {
  constructor(private readonly dataStoreFactory: ScryfallDataStoreFactory) {}

  async search(query: CardSearchQuery, signal?: AbortSignal): Promise<Card[]> {
    try {
      const store = this.dataStoreFactory.create();
      const response = await store.searchCards(query.value, signal);

      return cardDtoListToDomainMapper(response.data);
    } catch (error) {
      throw mapDataErrorToDomain(error);
    }
  }
}
