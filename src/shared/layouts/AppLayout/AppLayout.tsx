import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';

import { cn } from '@/shared/utils/cn';

export function AppLayout() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="o-container flex h-14 items-center justify-between">
          <span className="text-lg font-semibold text-primary">Ship Web Fast</span>
          <nav className="flex gap-4">
            <Link to="/" className={cn('text-sm font-medium text-zinc-700 no-underline hover:text-primary')}>
              {t('nav.home')}
            </Link>
            <Link
              to="/cards"
              className={cn('text-sm font-medium text-zinc-700 no-underline hover:text-primary')}
            >
              {t('nav.cards')}
            </Link>
          </nav>
        </div>
      </header>
      <main className="o-container py-8">
        <Outlet />
      </main>
      <footer className="border-t border-zinc-200 py-4 text-center text-xs text-muted-foreground">
        {t('footer.attribution')}
      </footer>
    </div>
  );
}
