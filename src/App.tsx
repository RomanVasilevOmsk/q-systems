import { useEffect, useCallback } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { useAppDispatch } from './store/hooks';
import { SkillsService } from './services/skills.service';
import { setLoadingSkills, setSuccessLoadSkills } from './store/skills/skillsSlice';

export default function App() {
  const dispatch = useAppDispatch();

  const getSkills = useCallback(async () => {
    dispatch(setLoadingSkills(true));
    try {
      const data = await SkillsService.getSkills();
      if (data) {
        dispatch(setSuccessLoadSkills(data));
      }
    } catch (error) {
      console.log(error);
    }

    dispatch(setLoadingSkills(false));
  }, [dispatch]);

  useEffect(() => {
    // Here we can check whether the user is authorized, but for now we will load data for the entire application
    getSkills();
  }, [getSkills]);

  return <RouterProvider router={router} />;
}
