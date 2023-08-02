import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AttributeState } from '../../types/scoreTypes';

const initialState: AttributeState = {
  intellect: 1,
  psyche: 1,
  physique: 1,
  motorics: 1,
};

const attributeMap: { [key: string]: keyof AttributeState } = {
  intellect: 'intellect',
  psyche: 'psyche',
  physique: 'physique',
  motorics: 'motorics',
};

const attributesSlice = createSlice({
  name: 'attributes',
  initialState,
  reducers: {
    updateAttribute: (
      state,
      action: PayloadAction<{ attribute: keyof AttributeState; value: number }>
    ) => {
      const { attribute, value } = action.payload;
      const attributeName = attributeMap[attribute] as keyof AttributeState;
      if (attributeName) {
        return {
          ...state,
          [attributeName]: Math.min(value, 99),
        };
      }
      return state;
    },
  },
});

export const { updateAttribute } = attributesSlice.actions;
export default attributesSlice.reducer;
