import ShopCounter from "pages/ShopCounter";

export default {
  title: "Pages/ShopCounter",
  component: ShopCounter,
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
    <ShopCounter/>
  );
};

export const Default = {
  render: () => <Template />,
};
