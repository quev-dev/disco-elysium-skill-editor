import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SkillState } from '../../types/scoreTypes';

interface SignatureState {
  skill: keyof SkillState | null;
}

const initialState: SignatureState = {
  skill: null,
};

const signatureSlice = createSlice({
  name: 'signature',
  initialState,
  reducers: {
    setSignatureSkill: (state, action: PayloadAction<keyof SkillState>) => {
      state.skill = action.payload;
    },
    resetSignatureSkill: (state) => {
      state.skill = null;
    },
  },
});

export const { setSignatureSkill, resetSignatureSkill } = signatureSlice.actions;
export default signatureSlice.reducer;
