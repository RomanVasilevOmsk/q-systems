import { IVacancy, VacanciesApiArg } from '../types/index';
import { api } from '../api/axios.api';
import { RestApiUrls } from '../constants/urls';

export const VacanciesService = {
  async getVacancies({ city, skills, query }: VacanciesApiArg): Promise<IVacancy[] | undefined> {
    let data = null;
    try {
      const response = await api.get(RestApiUrls.Vacancies);
      let filteredData = response.data.data;

      if (query) {
        let newData = filteredData.slice(0, query.limit);

        //Imitation pagination
        if (query?.page > 1) {
          data = [...filteredData];
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
    } catch (err) {
      console.log(err);
    }
    if (data) return data;
  },
};
