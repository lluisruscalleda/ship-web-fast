import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RootComponent } from '@/shared/components/RootComponent/RootComponent';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>
);
