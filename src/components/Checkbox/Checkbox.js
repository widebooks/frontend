import PropTypes from "prop-types";
import {default as CheckboxMui} from '@mui/material/Checkbox';
import {FormControlLabel} from "@mui/material";

const Checkbox = ({
                    value,
                    label,
                    onChange
                   }) => {

  return (
    <FormControlLabel
      label={label}
      control={
        <CheckboxMui
          checked={value}
          onChange={onChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
    />
  )
}

Checkbox.propTypes = {
  value: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  value: false,
  label: "",
  onChange: () => {}
};

export default Checkbox;