import React from 'react';
import {createTheme, TextField} from "@mui/material";
import {ThemeProvider} from "@mui/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: '#202020',
              color: '#fff',
            }),
        }),
      },
    },
  },
});

const Input = (
  {
    register = () => {},
    error,
    helperText,
    label,
    type,
    onInput,
    onFocus,
    readOnly = false,
  }) => {

  return (
    <ThemeProvider theme={theme}>
      <TextField
        fullWidth
        variant={readOnly ? "filled" : "outlined"}
        margin="normal"
        hiddenLabel={readOnly}
        label={readOnly ? null : label}
        type={type}
        {...register()}
        error={error}
        helperText={helperText}
        onInput={onInput}
        onFocus={onFocus}
        InputProps={{
          readOnly: readOnly,
        }}
      />
    </ThemeProvider>
  );
}

export default Input;