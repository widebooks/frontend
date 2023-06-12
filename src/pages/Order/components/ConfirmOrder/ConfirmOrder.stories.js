import React from "react";

import ConfirmOrder from "./ConfirmOrder";

export default {
  title: "Pages/Order/ConfirmOrder",
  component: ConfirmOrder,
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
    <ConfirmOrder

    />
  );
};

export const Default = {
  render: () => <Template />,
};
