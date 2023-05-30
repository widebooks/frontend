import Image from "components/Image";

export default {
  title: "UI/Image",
  component: Image,
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
    <Image/>
  );
};

export const Default = {
  render: () => <Template />,
};
