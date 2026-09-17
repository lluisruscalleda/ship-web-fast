import { useTranslation } from 'react-i18next';

import { CardList } from '../components/CardList/CardList';
import { CardSearchInput } from '../components/CardSearchInput/CardSearchInput';
import { LoadingView } from '../components/LoadingView/LoadingView';
import { RetryView } from '../components/RetryView/RetryView';
import { useCards } from '../hooks/useCards';

export function CardsPage() {
  const { t } = useTranslation();
  const {
    cards,
    isLoading,
    isError,
    errorMessage,
    inputValue,
    setInputValue,
    submitSearch,
    retry,
  } = useCards();

  return (
    <div className="o-stack">
      <header className="o-page-header">
        <h1 className="text-2xl font-bold">{t('cards.title')}</h1>
        <p className="mt-1 text-sm text-zinc-600">{t('cards.subtitle')}</p>
      </header>

      <CardSearchInput
        value={inputValue}
        onChange={setInputValue}
        onSubmit={submitSearch}
        placeholder={t('cards.searchPlaceholder')}
        submitLabel={t('cards.searchButton')}
      />

      {isLoading && <LoadingView message={t('cards.loading')} />}

      {isError && !isLoading && (
        <RetryView
          message={errorMessage ?? t('cards.errors.generic')}
          onRetry={retry}
          retryLabel={t('cards.retry')}
        />
      )}

      {!isLoading && !isError && (
        <>
          <p className="text-sm text-zinc-500">{t('cards.results', { count: cards.length })}</p>
          <CardList cards={cards} />
        </>
      )}
    </div>
  );
}
