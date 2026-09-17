import { describe, expect, it } from 'vitest';

import { NetworkError, NotFoundError, ServerError } from '@/domains/Cards/data/errors/DataErrors';
import { mapDataErrorToDomain } from '@/domains/Cards/data/mappers/dataErrorToDomainMapper';
import { CardsSearchError } from '@/domains/Cards/domain/errors/CardsSearchError';

describe('mapDataErrorToDomain', () => {
  it('maps infrastructure errors to domain search errors', () => {
    expect(mapDataErrorToDomain(new NetworkError())).toMatchObject({
      code: 'NETWORK',
    });
    expect(mapDataErrorToDomain(new NotFoundError('missing'))).toMatchObject({
      code: 'NOT_FOUND',
      message: 'missing',
    });
    expect(mapDataErrorToDomain(new ServerError())).toMatchObject({
      code: 'SERVER',
    });
  });

  it('wraps unknown errors', () => {
    const mapped = mapDataErrorToDomain(new Error('boom'));

    expect(mapped).toBeInstanceOf(CardsSearchError);
    expect(mapped.message).toBe('boom');
  });

  it('passes through existing domain errors', () => {
    const domainError = new CardsSearchError('already domain', 'UNKNOWN');

    expect(mapDataErrorToDomain(domainError)).toBe(domainError);
  });
});
