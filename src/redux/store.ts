import { configureStore } from '@reduxjs/toolkit';
import attributesReducer from './slices/attributesSlice';
import skillsReducer from './slices/skillsSlice';
import signatureReducer from './slices/signatureSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      attributes: attributesReducer,
      skills: skillsReducer,
      signature: signatureReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
