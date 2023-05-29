import cn from "classnames";

import {ReactComponent as LogoSVG} from "./static/logo.svg";
import {ReactComponent as CopyrightSVG} from "./static/copyright.svg";
import cl from "./Logo.module.scss";

const Logo = ({className}) => {

  return (
    <div className={cn(cl.logo__wrapper, className)}>
      <LogoSVG className={cl.logo}/>
      <div className={cl.logo__copyright}>
        <CopyrightSVG/>
      </div>
    </div>
  )
}

export default Logo;