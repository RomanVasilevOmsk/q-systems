import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { IVacancy } from '../../../../types';
import { Button, Container, Typography } from '@mui/material';

interface VacancyItemProps {
  vacancy: IVacancy;
}

export const VacancyItem = ({ vacancy }: VacancyItemProps) => {
  const { title, requiredExperience, salary, city, companyName } = vacancy;
  return (
    <Container
      sx={{
        borderRadius: '10px',
        paddingTop: 2,
        paddingBottom: '5px',
        boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
      }}
    >
      <Typography variant="h5" sx={{ mb: '10px', color: 'text.primary' }}>
        {title}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', mb: '10px' }}>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {salary.fromSalary} - {salary.toSalary} руб. на руки
        </Typography>
        <Chip label={`Опыт ${requiredExperience.fromYear} - ${requiredExperience.toYear} лет`} />
      </Box>

      <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
        {city}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: '10px', color: 'text.primary' }}>
        {companyName}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', mb: '10px' }}>
        <Button variant="contained">Откликнуться</Button>
        <Button variant="outlined">Посмотреть контент</Button>
      </Box>
    </Container>
  );
};
