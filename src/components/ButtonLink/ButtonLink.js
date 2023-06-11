import PropTypes from "prop-types";
import cn from "classnames";

import cl from "./ButtonLink.module.scss";

const ButtonLink = ({
                      type,
                      className,
                      children,
                      onClick
                    }) => {

  return (
    <div
      className={cn(cl.link, {
        [cl.link__default]: type === "default",
        [cl.link__white]: type === "white",
      },
        className)}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

ButtonLink.propTypes = {
  type: PropTypes.oneOf(["default", "white"]),
  className: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

ButtonLink.defaultProps = {
  type: "default",
  onClick: () => {}
}

export default ButtonLink;