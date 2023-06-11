import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Header from "../Header";
import Footer from "components/Footer";
import Container from "../Container";

import cl from "./Wrapper.module.scss";

const WrapperApp = ({
                      countProductInBasket,
                      children,
                      className
}) => (
  <div className={cn(cl.wrapper, className)}>
    <Header className={cl.header} countProductInBasket={countProductInBasket}/>
    <Container className={cl.content}>
      {children}
    </Container>
    <Footer className={cl.footer}/>
  </div>
)

WrapperApp.propTypes = {
  countProductInBasket: PropTypes.number,
  children: PropTypes.any,
  className: PropTypes.string,
};

WrapperApp.defaultProps = {
  children: null
};


export default WrapperApp;