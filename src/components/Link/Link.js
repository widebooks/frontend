import { NavLink as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";

import cl from "./Link.module.scss";

const Link = ({
  path,
  children
}) => {

  return (
    <RouterLink to={path}>
      {({ isActive }) => (
        <div className={isActive ? cn(cl.link, cl.link__active) : cn(cl.link, cl.link__isHover)}>
          {children}
        </div>
      )}
    </RouterLink>
  )
}

Link.propTypes = {
  path: PropTypes.string,
};

Link.defaultProps = {
  path: ""
};


export default Link;