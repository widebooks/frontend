import {BrowserRouter, Route, Routes} from "react-router-dom";

import Footer from "./Footer";

export default {
  title: "UI/Footer",
  component: Footer,
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
    <Footer />
  );
};

export const Default = {
  render: () => <Template />,
};
