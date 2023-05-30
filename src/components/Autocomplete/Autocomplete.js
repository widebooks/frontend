import TextField from '@mui/material/TextField';
import {default as AutocompleteMui} from '@mui/material/Autocomplete';
import PropTypes from "prop-types";

const Autocomplete = ({
                        title,
                        inputtedValue,
                        options,
                        onChange,
}) => {

  return (
    <AutocompleteMui
      disablePortal
      options={options}
      renderInput={(params) => (
        <TextField {...params} label={title} />
      )}
      inputValue={inputtedValue}
      onInputChange={(_, v) => onChange(v)}
    />
  );
}

Autocomplete.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

Autocomplete.defaultProps = {
  title: "Автор",
  options: [],
  onChange: () => {}
};

export default Autocomplete

