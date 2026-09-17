import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CardsPage } from '@/domains/Cards/presentation/pages/CardsPage';
import { HomePage } from '@/domains/Home/presentation/pages/HomePage';
import { AppLayout } from '@/shared/layouts/AppLayout/AppLayout';
import { NotFoundPage } from '@/shared/pages/NotFoundPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
