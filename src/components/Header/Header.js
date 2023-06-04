import cn from "classnames";
import Container from "components/Container";
import Logo from "components/Logo";

import HeaderLink from "./components/HeaderLink";
import cl from "./Header.module.scss";

const Header = ({className}) => {

  return (
    <div className={cn(cl.header, className)}>
      <Container className={cl.header__container}>
        <Logo className={cl.header__img} />
        <div className={cl.header__links}>
          <HeaderLink path="/shop-counter">Книги</HeaderLink>
          <HeaderLink path="/buy">Покупка</HeaderLink>
          <HeaderLink path="/sale">Продажа</HeaderLink>
          <HeaderLink path="/personal-account">Личный кабинет</HeaderLink>
        </div>
      </Container>
    </div>
  )
}

export default Header;