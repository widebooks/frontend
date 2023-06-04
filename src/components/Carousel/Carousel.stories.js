import React from "react";
import Carousel from "components/Carousel";
import {PATH_BOOKS_MODEL_FRONT} from "constants";

import mockCarouselItems from "./mock/mockCarouselItems";


export default {
  title: "UI/Carousel",
  component: Carousel,
  argTypes: {},
  decorators: [
    Story => (
      <div style={{ margin: "20px", height: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = () => {
  return (
    <Carousel
      items={mockCarouselItems}
      pathToImage={PATH_BOOKS_MODEL_FRONT}
    />
  );
};

export const Default = {
  render: () => <Template />,
};
