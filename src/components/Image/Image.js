import PropTypes from "prop-types";
import cn from "classnames";

import cl from "./Image.module.scss";
import {ReactComponent as PlugSVG} from "./static/plugEmptyImage.svg";

const Image = ({
  path,
  file,
  name,
  view,
  className
}) => {
  if (!path || !file) {
    return (
      <PlugSVG
        className={cn(cl.image,
          {
            [cl.image__contain]: view === "contain",
            [cl.image__cover]: view === "cover"
          }, className)}
      />
    )
  }

  return (
    <img
      src={`${path}/${file}`}
      alt={name}
      className={cn(cl.image,
        {
          [cl.image__contain]: view === "contain",
          [cl.image__cover]: view === "cover"
        }, className)}
    />
  )
}

Image.propTypes = {
  path: PropTypes.string,
  file: PropTypes.string,
  name: PropTypes.string,
  view: PropTypes.oneOf(["contain", "cover"]),
  className: PropTypes.string,
};

Image.defaultProps = {
  name: "Изображение книги",
  contain: "contain",
};

export default Image;