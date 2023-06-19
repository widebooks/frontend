import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Sale from "./ExchangeContainerMock";

export default {
  title: "Pages/Product/Exchange",
  component: Sale,
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
    <Sale />
  );
};

export const Default = {
  render: () => <Template />,
};
