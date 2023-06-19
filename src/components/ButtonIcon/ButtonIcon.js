import PropTypes from "prop-types";
import cn from "classnames";

import cl from "./ButtonIcon.module.scss";
import {ReactComponent as DefaultSVG} from "./static/defaultSvg.svg";

const ButtonIcon = ({
                      icon,
                      children,
  className

                    }) => {
  return (
    <button className={cn(cl.button, className)}>
      {children || icon}
    </button>
  )
}

ButtonIcon.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.any,
}

ButtonIcon.defaultProps = {
  children: null,
  icon: <DefaultSVG />,
};

export default ButtonIcon;