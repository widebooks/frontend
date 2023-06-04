import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShopCounterContainerMock from "pages/ShopCounter/ShopCounterContainerMock";

export default {
  title: "Pages/ShopCounter",
  component: ShopCounterContainerMock,
  argTypes: {},
  decorators: [
    Story => (
      <div style={{ margin: "20px" }}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={(
              <Story />
            )} />
          </Routes>
        </BrowserRouter>
      </div>
    ),
  ],
};

const Template = () => {
  return (
    <ShopCounterContainerMock/>
  );
};

export const Default = {
  render: () => <Template />,
};
