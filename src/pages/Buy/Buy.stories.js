import Buy from "pages/Buy";

export default {
  title: "Pages/Buy",
  component: Buy,
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
    <Buy />
  );
};

export const Default = {
  render: () => <Template />,
};
