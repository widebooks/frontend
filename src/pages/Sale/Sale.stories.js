import React, { useState } from "react";

import Sale from "./SaleContainerMock";

export default {
  title: "Pages/Sale",
  component: Sale,
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
    <Sale />
  );
};

export const Default = {
  render: () => <Template />,
};
