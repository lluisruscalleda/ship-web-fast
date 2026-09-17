import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="o-stack items-center py-16 text-center">
      <h1 className="text-2xl font-semibold">{t('notFound.title')}</h1>
      <Link
        to="/"
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground no-underline hover:bg-primary/90"
      >
        {t('notFound.back')}
      </Link>
    </div>
  );
}
