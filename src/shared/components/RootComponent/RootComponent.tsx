import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import { queryClient } from '@/lib/query-client';
import { AppRouter } from '@/shared/routes';
import { store } from '@/store/store';
import '@/shared/i18n/config';
import '@/styles/index.css';

export function RootComponent() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </Provider>
  );
}
