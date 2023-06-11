import React, { useState } from "react";

import ButtonLink from "components/ButtonLink";

export default {
  title: "UI/ButtonLink",
  component: ButtonLink,
  argTypes: {},
  decorators: [
    Story => (
        <Story />
    ),
  ],
};

const Template = args => {
  return (
    <div style={{background: args.type === "white" ? "#42a5f5" : "#fff", padding: "40px"}}>
      <ButtonLink
        {...args}
      />
    </div>
  );
};

export const Default = {
  render: args => <Template {...args} />,
  args: {
    children: "Кнопка"
  }
};

export const TypeWhite = {
  render: args => <Template {...args} />,
  args: {
    ...Default.args,
    type: "white"
  }
};
