import { describe, expect, it, vi } from 'vitest';

import { bindUseCase } from '@/lib/usecase/bindUseCase';
import type { UseCase } from '@/lib/usecase/UseCase';

describe('bindUseCase', () => {
  it('executes the use case with params and abort signal', async () => {
    const useCase: UseCase<{ query: string; signal?: AbortSignal }, string[]> = {
      execute: vi.fn().mockResolvedValue(['bolt']),
    };

    const signal = new AbortController().signal;
    const run = bindUseCase(useCase, { query: 'type:instant' });
    const result = await run({ signal });

    expect(useCase.execute).toHaveBeenCalledWith({
      query: 'type:instant',
      signal,
    });
    expect(result).toEqual(['bolt']);
  });
});
