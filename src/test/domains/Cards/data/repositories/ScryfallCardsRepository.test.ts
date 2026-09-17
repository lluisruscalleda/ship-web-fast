import { describe, expect, it, vi } from 'vitest';

import type { ScryfallDataStore } from '@/domains/Cards/data/datasources/ScryfallDataStore';
import { ScryfallDataStoreFactory } from '@/domains/Cards/data/datasources/ScryfallDataStoreFactory';
import { NetworkError } from '@/domains/Cards/data/errors/DataErrors';
import { ScryfallCardsRepository } from '@/domains/Cards/data/repositories/ScryfallCardsRepository';
import { CardsSearchError } from '@/domains/Cards/domain/errors/CardsSearchError';
import { Card } from '@/domains/Cards/domain/models/Card';
import { CardSearchQuery } from '@/domains/Cards/domain/models/CardSearchQuery';
import { cardDtoListFixture } from '@/test/domains/Cards/fixtures/cardDto.fixture';

describe('ScryfallCardsRepository', () => {
  it('maps DTOs from the data store to Card entities', async () => {
    const store: ScryfallDataStore = {
      searchCards: vi.fn().mockResolvedValue({
        object: 'list',
        total_cards: 1,
        has_more: false,
        data: cardDtoListFixture,
      }),
    };

    const factory = {
      create: () => store,
    } as unknown as ScryfallDataStoreFactory;

    const repository = new ScryfallCardsRepository(factory);
    const query = CardSearchQuery.create('type:instant');
    const result = await repository.search(query);

    expect(store.searchCards).toHaveBeenCalledWith('type:instant', undefined);
    expect(result).toHaveLength(1);
    expect(result[0]).toBeInstanceOf(Card);
    expect(result[0]?.name).toBe('Lightning Bolt');
  });

  it('maps data layer errors to domain errors', async () => {
    const store: ScryfallDataStore = {
      searchCards: vi.fn().mockRejectedValue(new NetworkError()),
    };

    const factory = {
      create: () => store,
    } as unknown as ScryfallDataStoreFactory;

    const repository = new ScryfallCardsRepository(factory);

    await expect(repository.search(CardSearchQuery.create('type:instant'))).rejects.toBeInstanceOf(
      CardsSearchError
    );
  });
});
