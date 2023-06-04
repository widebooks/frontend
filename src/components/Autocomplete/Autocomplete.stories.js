import React, { useState } from "react";

import Autocomplete from "components/Autocomplete";
import mockAuthors from "./mock/mockAuthors";

export default {
  title: "UI/Autocomplete",
  component: Autocomplete,
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
    <Autocomplete
      options={mockAuthors.map(v => ({
        label: v.name
      }))}
      inputtedValue={inputtedAuthor}
      onChange={v => setInputtedAuthor(v)}
    />
  );
};

export const Default = {
  render: () => <Template />,
};
