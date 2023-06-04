import { NavLink as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";

import cl from "./HeaderLink.module.scss";

const HeaderLink = ({
  path,
  children
}) => {
  return (
    <RouterLink to={path} className={cl.link__wrapper}>
      {({ isActive }) => (
        <div className={isActive ? cn(cl.link, cl.link__active) : cn(cl.link, cl.link__isHover)}>
          {children}
        </div>
      )}
    </RouterLink>
  )
}

HeaderLink.propTypes = {
  path: PropTypes.string,
  children: PropTypes.any,
};

HeaderLink.defaultProps = {
  path: "",
  children: null
};


export default HeaderLink;