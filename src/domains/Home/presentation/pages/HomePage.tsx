import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button } from '@/shared/components/Button/Button';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="o-stack max-w-2xl">
      <header className="o-page-header">
        <h1 className="text-3xl font-bold text-zinc-900">{t('home.title')}</h1>
        <p className="mt-2 text-zinc-600">{t('home.subtitle')}</p>
      </header>
      <p className="text-sm text-zinc-500">{t('home.attribution')}</p>
      <div>
        <Link to="/cards" className="no-underline">
          <Button>{t('home.cta')}</Button>
        </Link>
      </div>
    </div>
  );
}
