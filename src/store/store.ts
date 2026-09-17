import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const appReducer = (state: Record<string, never> = {}) => state;

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function setupStore(preloadedState?: Partial<RootState>) {
  const saga = createSagaMiddleware();

  const testStore = configureStore({
    reducer: {
      app: appReducer,
    },
    preloadedState: preloadedState as RootState | undefined,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(saga),
  });

  saga.run(rootSaga);

  return testStore;
}

export type AppStore = ReturnType<typeof setupStore>;
