import { FC } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useHomeContext } from '../context';
import { SkillsFilter } from '../../../components/SkillsFilter';
import { VacancyList } from '../../../components/VacancyList';
import { CityFilter } from '../../../components/CityFilter';

const Home: FC = () => {
  const {
    skills,
    vacancies,
    selectedSkills,
    onSelectSkills,
    isDisabledBtn,
    city,
    onChangeCity,
    loadMoreVacancies,
    hasMoreVacancies,
    isLoading,
  } = useHomeContext();

  if (isLoading) {
    <Typography
      variant="h1"
      sx={{
        color: 'text.secondary',
        mt: '20px',
        mb: '20px',
      }}
    >
      Loading
    </Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ width: '100%' }}>
      <Typography
        variant="h4"
        sx={{
          color: 'text.secondary',
          mt: '20px',
          mb: '20px',
        }}
      >
        Вакансии
      </Typography>
      <Box sx={{ display: 'flex', gap: '20px', mb: '20px' }}>
        <SkillsFilter
          selectedSkills={selectedSkills}
          onSearchBySkills={onSelectSkills}
          skillOptions={skills}
          isDisabledBtn={isDisabledBtn}
        />
        <CityFilter cityValue={city} onSearchByCity={onChangeCity} isDisabledBtn={isDisabledBtn} />
      </Box>

      <Box>
        <VacancyList vacancies={vacancies} hasMoreVacancies={hasMoreVacancies} loadMoreVacancies={loadMoreVacancies} />
      </Box>
    </Container>
  );
};

export default Home;
