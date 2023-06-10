import Product from "pages/Product";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default {
  title: "Pages/Product",
  component: Product,
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

const Template = () => {
  return (
    <Product />
  );
};

export const Default = {
  render: () => <Template />,
};
