import {BrowserRouter, Route, Routes} from "react-router-dom";
import OrderMockContainer from "./OrderMockContainer";

export default {
  title: "Pages/Order",
  component: OrderMockContainer,
  argTypes: {},
  decorators: [
    Story => (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={(
            <div>
              <Story />
            </div>
          )} />
        </Routes>
      </BrowserRouter>
    ),
  ],
};

const Template = () => <OrderMockContainer/>

export const Default = {
  render: () => <Template />,
};
