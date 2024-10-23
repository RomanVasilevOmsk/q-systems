import { configureStore } from '@reduxjs/toolkit';
import vacanciesReducer from './vacancies/vacanciesSlice';
import skillsReducer from './skills/skillsSlice';

export const store = configureStore({
  reducer: {
    vacancies: vacanciesReducer,
    skills: skillsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
