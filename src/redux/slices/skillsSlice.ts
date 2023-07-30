import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SkillState } from '../../types/scoreTypes';

const initialState: SkillState = {
  logic: 0,
  encyclopedia: 0,
  rhetoric: 0,
  drama: 0,
  conceptualization: 0,
  visualCalculus: 0,

  volition: 0,
  inlandEmpire: 0,
  empathy: 0,
  authority: 0,
  espritDeCorps: 0,
  suggestion: 0,

  endurance: 0,
  painThreshold: 0,
  physicalInstrument: 0,
  electrochemistry: 0,
  shivers: 0,
  halfLight: 0,

  handEyeCoordination: 0,
  perception: 0,
  reactionSpeed: 0,
  savoirFaire: 0,
  interfacing: 0,
  composure: 0,
};

const attributeMap: { [key: string]: keyof SkillState } = {
  logic: 'logic',
  encyclopedia: 'encyclopedia',
  rhetoric: 'rhetoric',
  drama: 'drama',
  conceptualization: 'conceptualization',
  visualCalculus: 'visualCalculus',

  volition: 'volition',
  inlandEmpire: 'inlandEmpire',
  empathy: 'empathy',
  authority: 'authority',
  espritDeCorps: 'espritDeCorps',
  suggestion: 'suggestion',

  endurance: 'endurance',
  painThreshold: 'painThreshold',
  physicalInstrument: 'physicalInstrument',
  electrochemistry: 'electrochemistry',
  shivers: 'shivers',
  halfLight: 'halfLight',

  handEyeCoordination: 'handEyeCoordination',
  perception: 'perception',
  reactionSpeed: 'reactionSpeed',
  savoirFaire: 'savoirFaire',
  interfacing: 'interfacing',
  composure: 'composure',
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    updateSkill: (
      state,
      action: PayloadAction<{ skill: keyof SkillState; value: number }>
    ) => {
      const { skill, value } = action.payload;
      const skillName = attributeMap[skill] as keyof SkillState;
      if (skillName) {
        return {
          ...state,
          [skillName]: value,
        };
      }
      return state;
    },
  },
});

export const { updateSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
