import Genres from "components/MiniSearch/components/Genres";

export default {
  title: "Widgets/MiniSearch/Genres",
  component: Genres,
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
    <Genres/>
  );
};

export const Default = {
  render: () => <Template />,
};
