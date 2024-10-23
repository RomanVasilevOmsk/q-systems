import axios from 'axios';
import { getTokenFromLocalStorage } from '../helpers/localstorage.helper';
import { BASE_URL, RestApiUrls } from '../constants/urls';
import MockAdapter from 'axios-mock-adapter';
import { mockSkills } from '../mocks/skills';
import { mockVacancies } from '../mocks/vacancies';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Bearer ' + getTokenFromLocalStorage(),
  },
});

export const mockApi = new MockAdapter(api);

mockApi.onGet(RestApiUrls.Skills).reply(200, {
  status: 200,
  data: mockSkills,
});

mockApi.onGet(RestApiUrls.Vacancies).reply(200, {
  status: 200,
  data: mockVacancies,
});

export default api;
