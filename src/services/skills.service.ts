import { ISkill } from '../types/index';
import { api } from '../api/axios.api';
import { RestApiUrls } from '../constants/urls';

export const SkillsService = {
  async getSkills(): Promise<ISkill[] | undefined> {
    let data = null;
    try {
      const response = await api.get(RestApiUrls.Skills);
      data = response.data.data;
    } catch (err) {
      console.log(err);
    }
    if (data) return data;
  },
};
