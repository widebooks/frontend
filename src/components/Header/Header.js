import PropTypes from "prop-types";
import cn from "classnames";
import Container from "components/Container";
import Logo from "components/Logo";
import Badge from "components/Badge";

import HeaderLink from "./components/HeaderLink";
import cl from "./Header.module.scss";

const Header = ({className, countProductInBasket}) => {
  return (
    <div className={cn(cl.header, className)}>
      <Container className={cl.header__container}>
        <Logo className={cl.header__img} />
        <div className={cl.header__links}>
          <HeaderLink path="/shop-counter">Книги</HeaderLink>
          <HeaderLink path="/buy" disabled>Покупка<Badge count={0}/></HeaderLink>
          <HeaderLink path="/sale">Продажа</HeaderLink>
          <HeaderLink path="/personal-account">Личный кабинет</HeaderLink>
        </div>
      </Container>
    </div>
  )
}

Header.propTypes = {
  countProductInBasket: PropTypes.number,
  className: PropTypes.string,
};

Header.defaultProps = {
  countProductInBasket: 0,
};

export default Header;