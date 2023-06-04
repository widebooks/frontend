import {BrowserRouter, Route, Routes} from "react-router-dom";

import HeaderLink from "./HeaderLink";

export default {
  title: "UI/Header/HeaderLink",
  component: HeaderLink,
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
    <HeaderLink {...args}/>
  );
};

export const Default = {
  render: args => <Template {...args} />,
  args: {
    children: <div>Ссылка</div>,
  },
};
