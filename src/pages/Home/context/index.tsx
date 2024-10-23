import { useCallback, useMemo, useState, useContext, createContext, useEffect } from 'react';
import { ISkill, IVacancy, PaginationQueryArg, VacanciesApiArg } from '../../../types';
import { useSelector } from 'react-redux';
import { selectSkills, selectSkillsLoading } from '../../../store/skills/skillsSlice';
import {
  selectVacancies,
  setLoadingVacancies,
  setSuccessLoadVacancies,
  selectVacanciesLoading,
  selectTotalVacancies,
} from '../../../store/vacancies/vacanciesSlice';
import { useAppDispatch } from '../../../store/hooks';
import { VacanciesService } from '../../../services/vacancies.service';
import { DEFAULT_PAGINATION_LIMIT, DEFAULT_PAGINATION_PAGE } from '../../../constants';

interface HomeContextProps {
  skills: ISkill[] | null;
  vacancies: IVacancy[] | null;
  isLoading: boolean;
  selectedSkills: string[];
  onSelectSkills: (val: string[]) => void;
  city: string;
  onChangeCity: (val: string) => void;
  isDisabledBtn: boolean;
  loadMoreVacancies: (query: PaginationQueryArg) => void;
  hasMoreVacancies: boolean;
}

const Context = createContext<HomeContextProps | undefined>(undefined);

export const HomeContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [city, setCity] = useState<string>('');
  const skills = useSelector(selectSkills);
  const vacancies = useSelector(selectVacancies);
  const vacanciesTotal = useSelector(selectTotalVacancies);
  const skillsLoading = useSelector(selectSkillsLoading);
  const vacanciesLoading = useSelector(selectVacanciesLoading);
  const appDispatch = useAppDispatch();
  const hasMoreVacancies = !!(vacancies && vacancies?.length < vacanciesTotal);

  const getVacancies = useCallback(
    async ({ query, city, skills }: VacanciesApiArg) => {
      appDispatch(setLoadingVacancies(true));

      try {
        const data = await VacanciesService.getVacancies({
          city,
          skills,
          query: {
            page: query?.page || DEFAULT_PAGINATION_PAGE,
            limit: query?.limit || DEFAULT_PAGINATION_LIMIT,
          },
        });
        if (data?.data) {
          appDispatch(
            setSuccessLoadVacancies({
              list: data.data,
              total: data.total,
            }),
          );
        }
      } catch (error) {
        console.log(error);
      }

      appDispatch(setLoadingVacancies(false));
    },
    [appDispatch],
  );

  const loadMoreVacancies = useCallback(
    (query: PaginationQueryArg) => {
      getVacancies({ query, city, skills: selectedSkills });
    },
    [city, getVacancies, selectedSkills],
  );

  const onSelectSkills = useCallback((skills: string[]) => {
    setSelectedSkills(skills);
  }, []);

  const onChangeCity = useCallback((city: string) => {
    setCity(city);
  }, []);

  useEffect(() => {
    getVacancies({ city, skills: selectedSkills });
  }, [city, getVacancies, selectedSkills]);

  const value = useMemo((): HomeContextProps => {
    return {
      skills: skills || [],
      vacancies: vacancies || [],
      isLoading: !skills || !vacancies,
      isDisabledBtn: skillsLoading || vacanciesLoading,
      selectedSkills,
      onSelectSkills,
      city,
      onChangeCity,
      loadMoreVacancies,
      hasMoreVacancies,
    };
  }, [
    city,
    loadMoreVacancies,
    onChangeCity,
    onSelectSkills,
    selectedSkills,
    skills,
    skillsLoading,
    vacancies,
    vacanciesLoading,
    hasMoreVacancies,
  ]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useHomeContext = () => useContext(Context) as HomeContextProps;
