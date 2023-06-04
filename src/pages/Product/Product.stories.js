import Product from "pages/Product";

export default {
  title: "Pages/Product",
  component: Product,
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
    <Product/>
  );
};

export const Default = {
  render: () => <Template />,
};
