import Header from "components/Header";

export default {
  title: "UI/Header",
  component: Header,
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
    <Header/>
  );
};

export const Default = {
  render: () => <Template />,
};
