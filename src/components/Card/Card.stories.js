import Autocomplete from "components/Avatar";

export default {
  title: "UI/Card",
  component: Autocomplete,
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
    <Autocomplete/>
  );
};

export const Default = {
  render: () => <Template />,
};
