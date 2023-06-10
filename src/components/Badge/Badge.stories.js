import Badge from "components/Badge";

export default {
  title: "UI/Badge",
  component: Badge,
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
  return (
    <Badge
      {...args}
    />
  );
};

export const Default = {
  render: args => <Template {...args}/>,
  args: {
    count: 5
  }
};

export const MessageType = {
  render: args => <Template {...args}/>,
  args: {
    count: 10,
    type: "message"
  }
};
