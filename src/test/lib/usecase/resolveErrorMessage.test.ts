import { describe, expect, it } from 'vitest';

import { resolveErrorMessage } from '@/lib/usecase/resolveErrorMessage';

describe('resolveErrorMessage', () => {
  it('returns Error message', () => {
    expect(resolveErrorMessage(new Error('boom'))).toBe('boom');
  });

  it('returns string errors as-is', () => {
    expect(resolveErrorMessage('offline')).toBe('offline');
  });

  it('returns fallback for unknown values', () => {
    expect(resolveErrorMessage(null)).toBe('Unknown error');
    expect(resolveErrorMessage(undefined, 'fallback')).toBe('fallback');
  });
});
