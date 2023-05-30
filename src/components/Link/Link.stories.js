import Link from "components/Link";

export default {
  title: "UI/Link",
  component: Link,
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
    <Link/>
  );
};

export const Default = {
  render: () => <Template />,
};
