import {useState} from "react";
import Select from "components/Select";

import mockOptions from "./mock/mockOptions";

export default {
  title: "UI/Select",
  component: Select,
  argTypes: {},
  decorators: [
    Story => (
      <div style={{ margin: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = args => {
  const [selected, setSelected] = useState([]);

  const handleSelect = (event) => {
    const {
      target: { value },
    } = event;

    setSelected(value
      .map(v => mockOptions
        .find(g => g.title === v))
      .filter(v => v));
  }

  return (
    <Select
      {...args}
      values={selected.map(v => v.title)}
      onSelect={handleSelect}
    />
  );
};

export const Default = {
  render: args => <Template {...args}/>,
  args: {
    options: mockOptions.map(v => v.title)
  }
};
