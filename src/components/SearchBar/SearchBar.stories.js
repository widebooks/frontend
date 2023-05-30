import SearchBar from "components/SearchBar";

export default {
  title: "UI/SearchBar",
  component: SearchBar,
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
    <SearchBar/>
  );
};

export const Default = {
  render: () => <Template />,
};
