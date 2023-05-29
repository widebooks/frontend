import cn from "classnames";
import cl from "./Container.module.scss"

const Container = ({children, className}) => {

  return (
    <div className={cn(cl.container, className)}>
      {children}
    </div>
  )
}

export default Container;