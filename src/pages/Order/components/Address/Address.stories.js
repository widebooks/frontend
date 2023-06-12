import React, { useState } from "react";
import {useForm} from "react-hook-form";

import Address from "./Address";

export default {
  title: "Pages/Order/Address",
  component: Address,
  argTypes: {},
  decorators: [
    Story => (
      <div style={{ margin: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = () => {
  const {
    register: registerAddress,
    handleSubmit: handleSubmitAddress,
    formState: { errors: errorsAddress },
    trigger:triggerAddress,
    getValues: getValuesAddress,
    setValue :setValueAddress,
    setFocus: setFocusAddress,
    clearErrors: clearErrorsAddress
  } = useForm({
    mode: "onChange"
  });

  return (
    <Address useForm={{
      registerAddress,
      handleSubmitAddress,
      formState: { errorsAddress },
      triggerAddress,
      getValuesAddress,
      setValueAddress,
      setFocusAddress,
      clearErrorsAddress,
    }}/>
  );
};

export const Default = {
  render: () => <Template />,
};
