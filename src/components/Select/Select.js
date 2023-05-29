import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import cl from "./Select.module.scss"
import PropTypes from "prop-types";

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MuiMultipleSelectChip = ({
  name,
  options,
  values,
  onSelect
}) => {
  const theme = useTheme();

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel className={cl.inputLabel}>{name}</InputLabel>
        <Select
          multiple
          value={values}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          className={cl.select}
          onChange={onSelect}
        >
          {options.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, values, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

MuiMultipleSelectChip.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  values: PropTypes.array,
  onSelect: PropTypes.func,
};

MuiMultipleSelectChip.defaultProps = {
  name: "Выберите значение",
  options: [],
  values: [],
  onSelect: () => {},
};


export default MuiMultipleSelectChip