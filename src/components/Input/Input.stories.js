import React, { useState } from "react";

import Input from "components/Input";

export default {
  title: "UI/Input",
  component: Input,
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

  return (
    <Input/>
  );
};

export const Default = {
  render: () => <Template />,
};
