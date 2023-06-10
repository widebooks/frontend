import MiniSearchContainerMock from "./MiniSearchContainerMock";

export default {
  title: "Widgets/MiniSearch",
  component: MiniSearchContainerMock,
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
    <MiniSearchContainerMock />
  );
};

export const Default = {
  render: () => <Template />,
};
