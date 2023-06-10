import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "components/Header";

export default {
  title: "UI/Header",
  component: Header,
  argTypes: {},
  decorators: [
    Story => (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={(
            <div style={{ margin: "20px" }}>
              <Story />

            </div>
          )} />
        </Routes>
      </BrowserRouter>
    ),
  ],
};

const Template = args => {
  return (
    <Header {...args}/>
  );
};

export const Default = {
  render: args => <Template {...args}/>,
  args: {
    countProductInBasket: 5
  }
};
