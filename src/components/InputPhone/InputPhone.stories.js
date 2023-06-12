import React, { useState } from "react";
import {useForm} from "react-hook-form";
import InputPhone from "components/InputPhone";

export default {
  title: "UI/InputPhone",
  component: InputPhone,
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
  const { register, handleSubmit, formState: { errors }, control, getValues, trigger } = useForm({
    mode: "onChange"
  });

  return (
    <InputPhone control={control}/>
  );
};

export const Default = {
  render: () => <Template />,
};
