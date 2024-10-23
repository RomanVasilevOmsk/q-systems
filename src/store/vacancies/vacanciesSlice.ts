import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IVacancy } from '../../types';

interface VacanciesState {
  vacancies: IVacancy[] | null;
  isLoading: boolean;
}

const initialState: VacanciesState = {
  vacancies: null,
  isLoading: false,
};

export const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setLoadingVacancies: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSuccessLoadVacancies: (state, action: PayloadAction<IVacancy[]>) => {
      state.vacancies = action.payload || [];
    },
  },
});

export const { setLoadingVacancies, setSuccessLoadVacancies } = vacanciesSlice.actions;

export const selectVacancies = (state: RootState) => state.vacancies.vacancies;
export const selectVacanciesLoading = (state: RootState) => state.vacancies.isLoading;

export default vacanciesSlice.reducer;
