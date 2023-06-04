import PropTypes from "prop-types";
import cn from "classnames";

import {ReactComponent as LogoSVG} from "./static/logo.svg";
import {ReactComponent as CopyrightSVG} from "./static/copyright.svg";
import cl from "./Logo.module.scss";

const Logo = ({view, className}) => {

  return (
    <div className={cn(cl.logo__wrapper, className)}>
      <LogoSVG className={cn(cl.logo, {
        [cl.logo_white]: view === "white"
      })}/>
      <div className={cn(cl.logo__copyright, {
        [cl.logo__copyright_white]: view === "white"
      })}>
        <CopyrightSVG/>
      </div>
    </div>
  )
}

Logo.propTypes = {
  view: PropTypes.oneOf(["default", "white"]),
  className: PropTypes.string,
}

Logo.defaultProps = {
  view: "default",
};

export default Logo;