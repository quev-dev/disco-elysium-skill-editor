import { configureStore } from '@reduxjs/toolkit';
import attributesReducer from './slices/attributesSlice';
import skillsReducer from './slices/skillsSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      attributes: attributesReducer,
      skills: skillsReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
