import ListBooks from "components/MiniSearch/components/ListBooks";

export default {
  title: "Widgets/MiniSearch/ListBooks",
  component: ListBooks,
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
    <ListBooks/>
  );
};

export const Default = {
  render: () => <Template />,
};
