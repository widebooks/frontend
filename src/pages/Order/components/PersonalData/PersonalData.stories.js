import React, { useState } from "react";

import PersonalData from "./PersonalData";

export default {
  title: "Pages/Order/PersonalData",
  component: PersonalData,
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
    <PersonalData

    />
  );
};

export const Default = {
  render: () => <Template />,
};
