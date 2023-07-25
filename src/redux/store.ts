import { configureStore } from '@reduxjs/toolkit';
import attributesReducer from './slices/attributesSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      attributes: attributesReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
