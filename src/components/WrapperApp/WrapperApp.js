import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "components/Footer";
import Container from "../Container";
import cl from "./Wrapper.module.scss";

const WrapperApp = ({
                      countProductInBasket,
                      children
}) => (
  <div className={cl.wrapper}>
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
};

WrapperApp.defaultProps = {
  children: null
};


export default WrapperApp;