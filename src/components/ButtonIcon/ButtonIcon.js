import PropTypes from "prop-types";

import cl from "./ButtonIcon.module.scss";
import {ReactComponent as DefaultSVG} from "./static/defaultSvg.svg";

const ButtonIcon = ({
                      children,
                      icon,

                    }) => {
  return (
    <button className={cl.button}>
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