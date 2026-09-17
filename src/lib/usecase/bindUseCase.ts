import type { QuerySignal, WithAbortSignal } from './types';
import type { UseCase } from './UseCase';

/**
 * Binds a use case to query/mutation executors (TanStack Query, Vue Query, etc.).
 * Framework-agnostic: pass the result to any client that supports AbortSignal.
 */
export function bindUseCase<TParams extends object, TResult>(
  useCase: UseCase<WithAbortSignal<TParams>, TResult>,
  params: TParams
): (context?: QuerySignal) => Promise<TResult> {
  return (context?: QuerySignal) => useCase.execute({ ...params, signal: context?.signal });
}
