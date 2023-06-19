import { NavLink as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";

import cl from "./HeaderLink.module.scss";

const HeaderLink = ({
  path,
                      disabled,
  children
}) => {
  return (
    <RouterLink to={path} className={cl.link__wrapper}>
      {({ isActive }) => (
        <div
          className={cn(cl.link, {
            [cl.link__active]: isActive,
            [cl.link__isHover]: !isActive,
            [cl.link_disabled]: disabled,
          })}
        >
          {children}
        </div>
      )}
    </RouterLink>
  )
}

HeaderLink.propTypes = {
  path: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.any,
};

HeaderLink.defaultProps = {
  path: "",
  disabled: false,
  children: null
};


export default HeaderLink;