import Select from "components/Select";

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

const Template = () => {
  return (
    <Select/>
  );
};

export const Default = {
  render: () => <Template />,
};
