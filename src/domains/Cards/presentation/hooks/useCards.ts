import { useCallback, useState } from 'react';

import { useCardsContainer } from '../../di/useCardsContainer';
import { CardsSearchError } from '../../domain/errors/CardsSearchError';
import { InvalidSearchQueryError } from '../../domain/errors/InvalidSearchQueryError';
import { CardSearchQuery } from '../../domain/models/CardSearchQuery';
import { cardListToViewMapper } from '../mappers/cardToViewMapper';

import { useDebouncer } from '@/lib/react/useDebouncer';
import { useUseCaseQuery } from '@/lib/react/useUseCaseQuery';
import { resolveErrorMessage } from '@/lib/usecase/resolveErrorMessage';

const CARDS_QUERY_KEY = 'cards';
const SEARCH_DEBOUNCE_MS = 300;

export function useCards() {
  const { searchCards } = useCardsContainer();
  const debouncer = useDebouncer(SEARCH_DEBOUNCE_MS);
  const [searchQuery, setSearchQuery] = useState<CardSearchQuery>(() =>
    CardSearchQuery.resolveInitial(import.meta.env.VITE_SCRYFALL_DEFAULT_QUERY)
  );
  const [inputValue, setInputValue] = useState(searchQuery.value);
  const [validationError, setValidationError] = useState<string | null>(null);

  const { data, isLoading, isError, error, refetch } = useUseCaseQuery({
    useCase: searchCards,
    params: { query: searchQuery.value },
    queryKey: [CARDS_QUERY_KEY, searchQuery.value],
    select: (result) => cardListToViewMapper(result.cards),
  });

  const applySearchQuery = useCallback((raw: string) => {
    try {
      const nextQuery = CardSearchQuery.create(raw);
      setValidationError(null);
      setSearchQuery(nextQuery);
      setInputValue(nextQuery.value);
    } catch (error) {
      if (error instanceof InvalidSearchQueryError) {
        setValidationError(error.message);
      }
    }
  }, []);

  const submitSearch = useCallback(
    (raw: string) => {
      debouncer.cancel();
      applySearchQuery(raw);
    },
    [applySearchQuery, debouncer]
  );

  const handleInputChange = useCallback(
    (value: string) => {
      setInputValue(value);
      setValidationError(null);
      debouncer.schedule(() => submitSearch(value));
    },
    [debouncer, submitSearch]
  );

  const retry = useCallback(() => {
    void refetch();
  }, [refetch]);

  const queryErrorMessage = isError ? resolveErrorMessage(error) : null;

  return {
    cards: data ?? [],
    isLoading,
    isError: isError || validationError !== null,
    errorMessage: validationError ?? queryErrorMessage,
    searchQuery: searchQuery.value,
    inputValue,
    setInputValue: handleInputChange,
    submitSearch: () => submitSearch(inputValue),
    retry,
    searchErrorCode: error instanceof CardsSearchError ? error.code : undefined,
  };
}
