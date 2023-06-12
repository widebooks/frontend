import React, { useState } from "react";

import YandexMap from "./YandexMap";


export default {
  title: "Pages/Order/Address/YandexMap",
  component: YandexMap,
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
  const [inputtedAuthor, setInputtedAuthor] = useState("");

  return (
    <YandexMap
    />
  );
};

export const Default = {
  render: () => <Template />,
};
