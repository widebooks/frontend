import cn from "classnames";
import Logo from "components/Logo";
import Link from "components/Link";

import cl from "./Header.module.scss";

const Header = ({className}) => {

  return (
    <div className={cn(cl.header, className)}>
      <Logo className={cl.header__img} />
      <div className={cl.header__links}>
        <Link path="/shop-counter">Книги</Link>
        <Link path="/buy">Покупка</Link>
        <Link path="/sale">Продажа</Link>
        <Link path="/personal-account">Личный кабинет</Link>
      </div>
    </div>
  )
}

export default Header;