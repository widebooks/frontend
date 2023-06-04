import { NavLink as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";

import cl from "./FooterLink.module.scss";

const FooterLink = ({
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

FooterLink.propTypes = {
  path: PropTypes.string,
  children: PropTypes.any,
};

FooterLink.defaultProps = {
  path: "",
  children: null
};


export default FooterLink;