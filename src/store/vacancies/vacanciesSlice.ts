import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IVacancy } from '../../types';

interface VacanciesState {
  vacancies: {
    list: IVacancy[] | null;
    total: number;
  };
  isLoading: boolean;
}

const initialState: VacanciesState = {
  vacancies: {
    list: null,
    total: 0,
  },
  isLoading: false,
};

export const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setLoadingVacancies: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSuccessLoadVacancies: (
      state,
      action: PayloadAction<
        | {
            list: IVacancy[];
            total: number;
          }
        | undefined
      >,
    ) => {
      state.vacancies = {
        list: action?.payload?.list || [],
        total: action?.payload?.total || 0,
      };
    },
  },
});

export const { setLoadingVacancies, setSuccessLoadVacancies } = vacanciesSlice.actions;

export const selectVacancies = (state: RootState) => state.vacancies.vacancies.list;
export const selectTotalVacancies = (state: RootState) => state.vacancies.vacancies.total;
export const selectVacanciesLoading = (state: RootState) => state.vacancies.isLoading;

export default vacanciesSlice.reducer;
