import { describe, expect, it, vi } from 'vitest';

import { Card } from '@/domains/Cards/domain/models/Card';
import { CardSearchQuery } from '@/domains/Cards/domain/models/CardSearchQuery';
import type { CardsRepository } from '@/domains/Cards/domain/repositories/CardsRepository';
import { SearchCards } from '@/domains/Cards/domain/usecases/SearchCards';

describe('SearchCards', () => {
  it('validates the query and returns a domain result', async () => {
    const cards = [Card.create({ id: '1', name: 'Bolt' })];
    const repository: CardsRepository = {
      search: vi.fn().mockResolvedValue(cards),
    };

    const useCase = new SearchCards(repository);
    const result = await useCase.execute({ query: 'type:instant' });

    expect(repository.search).toHaveBeenCalledWith(
      expect.objectContaining({ value: 'type:instant' }),
      undefined
    );
    expect(result.query).toEqual(CardSearchQuery.create('type:instant'));
    expect(result.cards).toEqual(cards);
    expect(result.count).toBe(1);
  });

  it('forwards abort signal to the repository', async () => {
    const signal = new AbortController().signal;
    const repository: CardsRepository = {
      search: vi.fn().mockResolvedValue([]),
    };

    const useCase = new SearchCards(repository);
    await useCase.execute({ query: 'type:instant', signal });

    expect(repository.search).toHaveBeenCalledWith(
      expect.objectContaining({ value: 'type:instant' }),
      signal
    );
  });
});
