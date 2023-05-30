import Footer from "components/Footer";

export default {
  title: "UI/Footer",
  component: Footer,
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
    <Footer/>
  );
};

export const Default = {
  render: () => <Template />,
};
