export interface IRequiredExperience {
  fromYear: number;
  toYear: number;
}

export interface ISalary {
  fromSalary: number;
  toSalary: number;
}

export interface ISkill {
  title: string;
  value: string;
}

export interface IVacancy {
  id: number;
  title: string;
  requiredExperience: IRequiredExperience;
  salary: ISalary;
  city: string;
  companyName: string;
  skills?: ISkill[];
}

export interface PaginationQueryArg {
  page: number;
  limit: number;
}

export interface VacanciesApiArg {
  city?: string;
  skills?: string[];
  query?: PaginationQueryArg;
}
