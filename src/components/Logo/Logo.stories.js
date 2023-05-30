import Logo from "components/Logo";

export default {
  title: "UI/Logo",
  component: Logo,
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
    <Logo/>
  );
};

export const Default = {
  render: () => <Template />,
};
