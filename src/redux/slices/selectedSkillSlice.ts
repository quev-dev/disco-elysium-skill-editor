import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SelectedSkillState = string;

const initialState: SelectedSkillState = 'logic';

const selectedSkillSlice = createSlice({
  name: 'selectedSkill',
  initialState,
  reducers: {
    setSelectedSkill: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setSelectedSkill } = selectedSkillSlice.actions;
export default selectedSkillSlice.reducer;
