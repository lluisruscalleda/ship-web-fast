import { describe, expect, it } from 'vitest';

import { InvalidSearchQueryError } from '@/domains/Cards/domain/errors/InvalidSearchQueryError';
import { Card } from '@/domains/Cards/domain/models/Card';
import { CardSearchQuery } from '@/domains/Cards/domain/models/CardSearchQuery';

describe('CardSearchQuery', () => {
  it('trims and stores a valid query', () => {
    const query = CardSearchQuery.create('  type:instant  ');

    expect(query.value).toBe('type:instant');
  });

  it('rejects empty queries', () => {
    expect(() => CardSearchQuery.create('   ')).toThrow(InvalidSearchQueryError);
  });

  it('provides a fallback query', () => {
    expect(CardSearchQuery.fallback().value).toBe('type:creature');
  });

  it('resolves initial query from env-like input', () => {
    const query = CardSearchQuery.resolveInitial('type:dragon');

    expect(query.value).toBe('type:dragon');
  });

  it('falls back when initial query is invalid', () => {
    const query = CardSearchQuery.resolveInitial('   ');

    expect(query.value).toBe('type:creature');
  });

  it('compares queries by value', () => {
    const left = CardSearchQuery.create('type:instant');
    const right = CardSearchQuery.create('type:instant');
    const other = CardSearchQuery.create('type:sorcery');

    expect(left.equals(right)).toBe(true);
    expect(left.equals(other)).toBe(false);
  });
});

describe('Card', () => {
  it('creates a valid card entity', () => {
    const card = Card.create({
      id: 'abc',
      name: 'Bolt',
      manaCost: '{R}',
    });

    expect(card.name).toBe('Bolt');
    expect(card.manaCost).toBe('{R}');
  });
});
