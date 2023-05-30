import Switch from "components/Switch";

export default {
  title: "UI/Switch",
  component: Switch,
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
    <Switch/>
  );
};

export const Default = {
  render: () => <Template />,
};
