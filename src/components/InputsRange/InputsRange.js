import PropTypes from "prop-types";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from "@mui/material/InputAdornment";

import cl from "./InputsRange.module.scss";

const InputsRange = ({
  title,
  type,
  rangeValue,
  labelFrom,
  labelUpTo,
  maxCountNumber,
  getOnChangeRangeValue
}) => {
  const handleChange = key => e => {
    const v = e?.target?.value;
    if (!maxCountNumber) {
      return getOnChangeRangeValue(key)(v);
    }

    if (String(e?.target?.value).length <= maxCountNumber) {
      getOnChangeRangeValue(key)(v);
    }
  }

  const renderStartAdornment = (
    <InputAdornment position="start">
      {type === "price" && "₽" }
      {type === "rating" && "⭐"}
      {type === "year" && "📅"}
    </InputAdornment>
  )

  return (
    <div>
      <div className={cl.inputsRange__title}>{title}</div>
      <div className={cl.inputsRange__inner}>
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount">{labelFrom}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={renderStartAdornment}
            label="От"
            type="number"
            value={rangeValue.from}
            onChange={handleChange("from")}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount">{labelUpTo}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={renderStartAdornment}
            label="До"
            type="number"
            value={rangeValue.upTo}
            onChange={handleChange("upTo")}
          />
        </FormControl>
      </div>
    </div>
  )
}

InputsRange.propTypes = {
  labelFrom: PropTypes.string,
  type: PropTypes.oneOf(["price", "rating", "year"]),
  labelUpTo: PropTypes.string,
  rangeValue: PropTypes.object,
  maxCountNumber: PropTypes.number,
  getOnChangeRangeValue: PropTypes.func,
};

InputsRange.defaultProps = {
  title: "Цена",
  type: "price",
  labelFrom: "От",
  labelUpTo: "До",
  rangeValue: {},
  maxCountNumber: null,
  getOnChangeRangeValue: () => {}
};

export default InputsRange;