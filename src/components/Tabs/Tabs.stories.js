import Tabs from "components/Tabs";

export default {
  title: "UI/Tabs",
  component: Tabs,
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
    <Tabs/>
  );
};

export const Default = {
  render: () => <Template />,
};
