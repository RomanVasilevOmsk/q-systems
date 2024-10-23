import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ISkill } from '../../types';

interface SkillsState {
  skills: ISkill[] | null;
  isLoading: boolean;
}

const initialState: SkillsState = {
  skills: null,
  isLoading: false,
};

export const skillsSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setLoadingSkills: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSuccessLoadSkills: (state, action: PayloadAction<ISkill[]>) => {
      state.skills = action.payload || [];
    },
  },
});

export const { setLoadingSkills, setSuccessLoadSkills } = skillsSlice.actions;

export const selectSkills = (state: RootState) => state.skills.skills;
export const selectSkillsLoading = (state: RootState) => state.skills.isLoading;

export default skillsSlice.reducer;
