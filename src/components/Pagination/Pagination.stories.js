import Pagination from "components/Pagination";

export default {
  title: "UI/Pagination",
  component: Pagination,
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
    <Pagination/>
  );
};

export const Default = {
  render: () => <Template />,
};
