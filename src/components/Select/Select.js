import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {default as SelectMui}  from '@mui/material/Select';
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

const Select = ({
  name,
  options,
  values,
  onSelect,

                                 register,
                  onFocus,
                  onClose,
                  defaultValue,
                  error,
                  helperText,
  label
}) => {
  const theme = useTheme();

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel className={cl.inputLabel}>{name}</InputLabel>
        <SelectMui
          multiple={!defaultValue}
          value={!defaultValue ? values : undefined}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={!defaultValue ? (selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          ) : undefined}
          MenuProps={MenuProps}
          className={cl.select}
          onChange={onSelect}
          // TODO: Со старого приложения
          label={label}
          {...register()}
          onFocus={onFocus}
          onClose={onClose}
          defaultValue={defaultValue}
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
        </SelectMui>
      </FormControl>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  values: PropTypes.array,
  onSelect: PropTypes.func,

  register: PropTypes.func
};

Select.defaultProps = {
  name: "Выберите значение",
  options: [],
  values: [],
  onSelect: () => {},

  register: () => {}
};


export default Select