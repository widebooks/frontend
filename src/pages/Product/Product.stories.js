import Product from "pages/Product";
import {BrowserRouter, Route, Routes} from "react-router-dom";


import {PATH_BOOKS_MODEL_FRONT} from "constants";
import bookMock from "./mock/bookMock";

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
  args: {
    book: bookMock,
    pathToImage: PATH_BOOKS_MODEL_FRONT
  }
};
