import {BrowserRouter, Route, Routes} from "react-router-dom";
import BasketContainerMock from "pages/Basket/BasketContainerMock";

export default {
  title: "Pages/Basket",
  component: BasketContainerMock,
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

const Template = () => {
  return (
    <BasketContainerMock />
  );
};

export const Default = {
  render: () => <Template />,
};
