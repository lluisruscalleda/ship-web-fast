import { describe, expect, it, vi } from 'vitest';

import { scryfallApi } from '@/domains/Cards/data/api/scryfallApi';
import { CloudScryfallDataStore } from '@/domains/Cards/data/datasources/CloudScryfallDataStore';
import { cardDtoListFixture } from '@/test/domains/Cards/fixtures/cardDto.fixture';

vi.mock('@/domains/Cards/data/api/scryfallApi', () => ({
  scryfallApi: {
    searchCards: vi.fn(),
  },
}));

describe('CloudScryfallDataStore', () => {
  it('delegates search to scryfallApi', async () => {
    vi.mocked(scryfallApi.searchCards).mockResolvedValue({
      object: 'list',
      total_cards: 1,
      has_more: false,
      data: cardDtoListFixture,
    });

    const store = new CloudScryfallDataStore();
    const result = await store.searchCards('type:creature');

    expect(scryfallApi.searchCards).toHaveBeenCalledWith('type:creature', 1, undefined);
    expect(result.data).toHaveLength(1);
  });
});
