import PropTypes from "prop-types";
import cn from "classnames";

import cl from "./Image.module.scss";
import {ReactComponent as PlugSVG} from "./static/plugEmptyImage.svg";

const Image = ({
  logo,
  path,
  file,
  name,
  type,
  view,
  className
}) => {
  if (logo) {
    return (
      <img
        src={logo}
        alt={name}
        className={cn(cl.image,
          {
            [cl.image__contain]: view === "contain",
            [cl.image__cover]: view === "cover"
          }, className)}
      />
    )
  }


  //Если нет пути или название файла
  if (!path || !file) {
    if (type === "book") {
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

    return(
      <div>
        type === Default
      </div>
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
  logo: PropTypes.object,
  path: PropTypes.string,
  file: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(["default", "book"]),
  view: PropTypes.oneOf(["contain", "cover"]),
  className: PropTypes.string,
};

Image.defaultProps = {
  type: "default",
  name: "Изображение книги",
  view: "contain",
};

export default Image;