import Box from '@mui/material/Box';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { ISkill } from '../../types';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from '@mui/material';
import { useState } from 'react';

interface SkillsFilterProps {
  skillOptions: ISkill[] | null;
  selectedSkills: string[];
  onSearchBySkills: (val: string[]) => void;
  isDisabledBtn: boolean;
}

function getStyles(skill: string, selectSkills: readonly string[], theme: Theme) {
  return {
    fontWeight: selectSkills.includes(skill) ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const SkillsFilter = ({
  skillOptions,
  selectedSkills = [],
  onSearchBySkills,
  isDisabledBtn,
}: SkillsFilterProps) => {
  const theme = useTheme();
  const [values, setValues] = useState<string[]>(selectedSkills);

  const handleChange = (event: SelectChangeEvent<typeof selectedSkills>) => {
    const {
      target: { value },
    } = event;
    setValues(typeof value === 'string' ? value.split(',') : value);
  };

  const handleDelete = (value: string) => {
    const res = values.filter((s) => s !== value);
    setValues(res);
  };

  const onSearch = () => {
    onSearchBySkills(values);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ marginRight: '20px', width: 300 }}>
        <InputLabel sx={{ width: '70px' }}>Навыки</InputLabel>
        <Select
          labelId="skills-label-label"
          id="skills"
          multiple
          value={values}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="skills-label-label" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => {
                const label = skillOptions?.find((s) => s.value === value)?.title;
                return (
                  <Chip
                    key={value}
                    label={label}
                    deleteIcon={<CancelIcon onMouseDown={(event) => event.stopPropagation()} />}
                    onDelete={() => handleDelete(value)}
                  />
                );
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {skillOptions?.map((skill) => (
            <MenuItem key={skill.value} value={skill.value} style={getStyles(skill.value, selectedSkills, theme)}>
              {skill.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={onSearch} disabled={isDisabledBtn}>
        Поиск
      </Button>
    </Box>
  );
};
