import React from "react";
import {useForm} from "react-hook-form";

import CreditCard from "./CreditCard";

export default {
  title: "Pages/Order/CreditCard",
  component: CreditCard,
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
    register: registerCreditCard,
    handleSubmit: handleSubmitCreditCard,
    formState: { errors: errorsCreditCard },
    control: controlCreditCard,
    getValues: getValuesCreditCard,
    setValue: setValueCreditCard,
    trigger:triggerCreditCard,
    watch: watchCreditCard,
  } = useForm({
    mode: "onChange"
  });

  return (
    <CreditCard
      useForm={{
        registerCreditCard,
        handleSubmitCreditCard,
        formState: { errorsCreditCard },
        controlCreditCard,
        getValuesCreditCard,
        triggerCreditCard,
        setValueCreditCard,
        watchCreditCard,
      }}
    />
  );
};

export const Default = {
  render: () => <Template />,
};
