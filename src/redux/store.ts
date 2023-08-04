import { configureStore } from '@reduxjs/toolkit';
import attributesReducer from './slices/attributesSlice';
import skillsReducer from './slices/skillsSlice';
import selectedSkillReducer from './slices/selectedSkillSlice';
import signatureReducer from './slices/signatureSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      attributes: attributesReducer,
      skills: skillsReducer,
      selectedSkill: selectedSkillReducer,
      signature: signatureReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
