import WrapperApp from "components/WrapperApp";

const Order = ({
  countProductInBasket
}) => {

  return (
    <WrapperApp countProductInBasket={countProductInBasket}>
      Order
    </WrapperApp>
  )
}

export default Order;