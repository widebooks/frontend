import EmptySearch from "components/EmptySearch";

export default {
  title: "UI/EmptySearch",
  component: EmptySearch,
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
    <EmptySearch/>
  );
};

export const Default = {
  render: () => <Template />,
};
