import React from 'react';
import Input from "components/Input";
import YandexMap from "./components/YandexMap";

const Address = (
  {
    useForm: {
      registerAddress: register,
      handleSubmitAddress: handleSubmit,
      formState: { errorsAddress: errors },
      triggerAddress: trigger,
      getValuesAddress: getValues,
      setValueAddress: setAddress,
      setFocusAddress: setFocus,
      clearErrorsAddress: clearErrors
    },
  }
) => {
  return (
    <div>
      <YandexMap
        setValue={setAddress}
        setFocus={setFocus}
        clearErrors={clearErrors}
      />
      <Input
        register={() => {return register("address", {
          required: "Address is a required field!",
        })}}
        error={Boolean(errors.address)}
        helperText={errors?.address?.message}
        label="Address"
        readOnly={true}
      />
    </div>
  );
};

export default Address;