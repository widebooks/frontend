import InputsRange from "components/InputsRange";

export default {
  title: "UI/InputsRange",
  component: InputsRange,
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
    <InputsRange/>
  );
};

export const Default = {
  render: () => <Template />,
};
