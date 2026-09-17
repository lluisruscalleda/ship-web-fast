import { useQuery, type QueryKey, type UseQueryOptions } from '@tanstack/react-query';

import { bindUseCase } from '../usecase/bindUseCase';
import type { WithAbortSignal } from '../usecase/types';
import type { UseCase } from '../usecase/UseCase';

type UseUseCaseQueryOptions<
  TParams extends object,
  TResult,
  TSelected,
  TQueryKey extends QueryKey,
> = {
  useCase: UseCase<WithAbortSignal<TParams>, TResult>;
  params: TParams;
  queryKey: TQueryKey;
  select?: (data: TResult) => TSelected;
} & Omit<
  UseQueryOptions<TResult, unknown, TSelected, TQueryKey>,
  'queryKey' | 'queryFn' | 'select'
>;

export function useUseCaseQuery<
  TParams extends object,
  TResult,
  TSelected = TResult,
  TQueryKey extends QueryKey = QueryKey,
>({
  useCase,
  params,
  queryKey,
  select,
  ...options
}: UseUseCaseQueryOptions<TParams, TResult, TSelected, TQueryKey>) {
  return useQuery({
    queryKey,
    queryFn: ({ signal }) => bindUseCase(useCase, params)({ signal }),
    select,
    ...options,
  });
}
