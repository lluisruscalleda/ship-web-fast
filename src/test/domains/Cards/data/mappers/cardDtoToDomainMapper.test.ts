import { describe, expect, it } from 'vitest';

import { cardDtoToDomainMapper } from '@/domains/Cards/data/mappers/cardDtoToDomainMapper';
import { Card } from '@/domains/Cards/domain/models/Card';
import { cardDtoFixture } from '@/test/domains/Cards/fixtures/cardDto.fixture';

describe('cardDtoToDomainMapper', () => {
  it('maps Scryfall fields to a Card entity', () => {
    const card = cardDtoToDomainMapper(cardDtoFixture);

    expect(card).toBeInstanceOf(Card);
    expect(card.id).toBe('test-uuid');
    expect(card.name).toBe('Lightning Bolt');
    expect(card.manaCost).toBe('{R}');
    expect(card.typeLine).toBe('Instant');
    expect(card.imageUrl).toBe('https://example.com/bolt.jpg');
  });
});
