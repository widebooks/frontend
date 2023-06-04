import {BrowserRouter, Route, Routes} from "react-router-dom";
import WrapperApp from "components/WrapperApp";

export default {
  title: "UI/WrapperApp",
  component: WrapperApp,
  argTypes: {},
  decorators: [
    Story => (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={(
            <Story />
          )} />
        </Routes>
      </BrowserRouter>
    ),
  ],
};

const Template = ({countMockElement}) => {
  return (
    <WrapperApp>
      <div>
        {[...Array(countMockElement).keys()].map((key, i) => {
          return (
            <div key={i} style={{border: "1px solid #000", marginBottom: '20px'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem earum eveniet hic maiores minus nemo praesentium quod ut voluptatum.
            </div>
          )
        })}
      </div>
    </WrapperApp>
  );
};

export const Default = {
  render: args => <Template {...args}/>,
  args: {
    countMockElement: 3,
  }
};

export const ManyElement = {
  render: args => <Template {...args}/>,
  args: {
    countMockElement: 30,
  }
};

