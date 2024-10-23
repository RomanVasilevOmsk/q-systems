import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';

interface CityFilterProps {
  cityValue: string;
  onSearchByCity: (val: string) => void;
  isDisabledBtn: boolean;
}

export const CityFilter = ({ cityValue = '', onSearchByCity, isDisabledBtn }: CityFilterProps) => {
  const [value, setValue] = useState<string>(cityValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };

  const onSearch = () => {
    onSearchByCity(value);
  };

  return (
    <Box component="form" sx={{ display: 'flex', gap: '10px' }} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Город" variant="outlined" value={value} onChange={handleChange} />

      <Button variant="contained" onClick={onSearch} disabled={isDisabledBtn}>
        Поиск
      </Button>
    </Box>
  );
};
