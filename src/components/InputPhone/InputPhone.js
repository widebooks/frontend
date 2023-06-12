import React from 'react';
import ReactPhoneInput from 'react-phone-input-material-ui';
import {Controller} from "react-hook-form";
import {TextField} from "@mui/material";

import cl from "./InputPhone.module.scss";
import PropTypes from "prop-types";

const InputPhone = ({control}) => {
  return (
    <Controller
      control={control}
      name="phone"
      rules={{
        required: "Поле с телефоном обязательно к заполнению",
        pattern: {
          value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
          message: "Неверный формат телефона"
        }
      }}
      render={
        ({field: {onChange, value, ref}, fieldState: {error}}) => (
          <div className={cl.phone}>
            <ReactPhoneInput
              label="Телефон"
              component={TextField}
              value={value}
              onChange={(newValue) => {
                onChange(newValue)
                return newValue
              }}
              isValid={() => {
                return error ? error.message : true
              }}
            />
          </div>
        )
      }
    />
  );
}

InputPhone.propTypes = {
  control: PropTypes.object,
};

InputPhone.defaultProps = {
  control: {},
};

export default InputPhone;