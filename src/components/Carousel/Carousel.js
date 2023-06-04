import PropTypes from "prop-types";
import cn from "classnames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "components/Image";

import cl from "./Carousel.module.scss";

const Carousel = ({
  title,
  items,
  pathToImage,
  customSettings,
                    className,
                    classNameImage,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...customSettings
  };

  return (
    <div className={cn(cl.slick__wrapper, className)}>
      {title && <h2>{title}</h2>}
      <Slider
        slickGoTo={() => {}}
        {...settings}
        className={cl.slick}
        dotsClass={cn("slick-dots", cl.slick__dots)}
      >
        {
          items.map(v => (
            <Image
              key={v.id}
              path={pathToImage}
              file={v.srcImg}
              className={cn(cl.slick__img, classNameImage)}
            />
          ))
        }
      </Slider>
    </div>
  );
}

Carousel.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  pathToImage: PropTypes.string,
  customSettings: PropTypes.object,
  className: PropTypes.string,
  classNameImage: PropTypes.string,
};

Carousel.defaultProps = {
  items: [],
  pathToImage: "",
  customSettings: {},
};

export default Carousel;