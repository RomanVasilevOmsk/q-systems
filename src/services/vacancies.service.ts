import { IVacancy, VacanciesApiArg } from '../types/index';
import { api } from '../api/axios.api';
import { RestApiUrls } from '../constants/urls';

export const VacanciesService = {
  async getVacancies({ city, skills, query }: VacanciesApiArg): Promise<
    | {
        data: IVacancy[];
        total: number;
      }
    | undefined
  > {
    let data = null;
    let total = 0;
    try {
      const response = await api.get(RestApiUrls.Vacancies);
      let filteredData = response.data.data;

      //Imitation pagination
      if (query) {
        let newData = filteredData.slice(0, query.limit);
        if (query?.page > 1) {
          const start = (query?.page - 1) * query?.limit;
          data = [...newData].concat(filteredData.slice(query.limit, start + query.limit));
        } else {
          data = newData;
        }
      }

      //Imitation query params
      if (skills?.length) {
        data = filteredData.filter((v: IVacancy) => {
          return !!v.skills?.find((s) => skills.some((skill) => skill === s.value));
        });
      }
      if (city) {
        data = filteredData.filter((v: IVacancy) => !!v.city.toLowerCase().includes(city.toLowerCase()));
      }
      total = filteredData?.length || 0;
    } catch (err) {
      console.log(err);
    }
    if (data)
      return {
        data,
        total,
      };
  },
};
