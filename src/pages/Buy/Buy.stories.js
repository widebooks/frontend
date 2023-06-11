import {BrowserRouter, Route, Routes} from "react-router-dom";
import BuyContainerMock from "pages/Buy/BuyContainerMock";

export default {
  title: "Pages/Buy",
  component: BuyContainerMock,
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
    <BuyContainerMock />
  );
};

export const Default = {
  render: () => <Template />,
};
