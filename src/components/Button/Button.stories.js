import Button from "components/Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {},
  decorators: [
    Story => (
      <div style={{ margin: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  return (
    <Button
      {...args}
    />
  );
};

export const Default = {
  render: args => <Template {...args} />,
  args: {
    children: "Кнопка"
  }
};

export const TypeText = {
  render: args => <Template variant="text" {...args} />,
  args: {
    ...Default.args
  }
};

export const TypeOutline = {
  render: args => <Template variant="outlined" {...args} />,
  args: {
    ...Default.args
  }
};
