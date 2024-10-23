import { IVacancy } from '../types';
import { mockSkills } from './skills';

export const mockVacancies: IVacancy[] = [
  {
    id: 1,
    title: 'Вакансия 1',
    requiredExperience: {
      fromYear: 3,
      toYear: 6,
    },
    salary: {
      fromSalary: 130000,
      toSalary: 220000,
    },
    city: 'Кимры',
    companyName: 'ООО Оптимус',
    skills: [{ ...mockSkills[0] }, { ...mockSkills[1] }],
  },
  {
    id: 2,
    title: 'Вакансия 2',
    requiredExperience: {
      fromYear: 2,
      toYear: 4,
    },
    salary: {
      fromSalary: 140000,
      toSalary: 250000,
    },
    city: 'Кимры',
    companyName: 'ООО Оптимус',
    skills: [{ ...mockSkills[3] }, { ...mockSkills[4] }],
  },
  {
    id: 3,
    title: 'Вакансия 3',
    requiredExperience: {
      fromYear: 1,
      toYear: 2,
    },
    salary: {
      fromSalary: 40000,
      toSalary: 50000,
    },
    city: 'Москва',
    companyName: 'ООО Оптимус',
    skills: [{ ...mockSkills[2] }],
  },
  {
    id: 4,
    title: 'Вакансия 4',
    requiredExperience: {
      fromYear: 1,
      toYear: 2,
    },
    salary: {
      fromSalary: 240000,
      toSalary: 250000,
    },
    city: 'Дубна',
    companyName: 'ООО Рога и копыта',
    skills: [{ ...mockSkills[3] }],
  },
  {
    id: 5,
    title: 'Вакансия 5',
    requiredExperience: {
      fromYear: 1,
      toYear: 2,
    },
    salary: {
      fromSalary: 240000,
      toSalary: 250000,
    },
    city: 'Дубна',
    companyName: 'ООО Рога и копыта',
    skills: [{ ...mockSkills[3] }],
  },
  {
    id: 6,
    title: 'Вакансия 6',
    requiredExperience: {
      fromYear: 1,
      toYear: 2,
    },
    salary: {
      fromSalary: 40000,
      toSalary: 50000,
    },
    city: 'Дубна',
    companyName: 'ООО Оптимус',
    skills: [{ ...mockSkills[2] }],
  },
  {
    id: 7,
    title: 'Вакансия 7',
    requiredExperience: {
      fromYear: 3,
      toYear: 6,
    },
    salary: {
      fromSalary: 130000,
      toSalary: 220000,
    },
    city: 'Кимры',
    companyName: 'ООО Оптимус',
    skills: [{ ...mockSkills[0] }, { ...mockSkills[1] }],
  },
  {
    id: 8,
    title: 'Вакансия 8',
    requiredExperience: {
      fromYear: 3,
      toYear: 6,
    },
    salary: {
      fromSalary: 130000,
      toSalary: 220000,
    },
    city: 'Кимры',
    companyName: 'ООО Оптимус',
    skills: [{ ...mockSkills[0] }, { ...mockSkills[1] }],
  },
  {
    id: 9,
    title: 'Вакансия 9',
    requiredExperience: {
      fromYear: 1,
      toYear: 2,
    },
    salary: {
      fromSalary: 240000,
      toSalary: 250000,
    },
    city: 'Дубна',
    companyName: 'ООО Рога и копыта',
    skills: [{ ...mockSkills[3] }],
  },
  {
    id: 10,
    title: 'Вакансия 10',
    requiredExperience: {
      fromYear: 1,
      toYear: 2,
    },
    salary: {
      fromSalary: 240000,
      toSalary: 250000,
    },
    city: 'Дубна',
    companyName: 'ООО Рога и копыта',
    skills: [{ ...mockSkills[3] }],
  },
  {
    id: 11,
    title: 'Вакансия 11',
    requiredExperience: {
      fromYear: 2,
      toYear: 4,
    },
    salary: {
      fromSalary: 140000,
      toSalary: 250000,
    },
    city: 'Кимры',
    companyName: 'ООО Оптимус',
    skills: [{ ...mockSkills[3] }, { ...mockSkills[4] }],
  },
  {
    id: 12,
    title: 'Вакансия 12',
    requiredExperience: {
      fromYear: 1,
      toYear: 2,
    },
    salary: {
      fromSalary: 240000,
      toSalary: 250000,
    },
    city: 'Дубна',
    companyName: 'ООО Рога и копыта',
    skills: [{ ...mockSkills[1] }],
  },
];
