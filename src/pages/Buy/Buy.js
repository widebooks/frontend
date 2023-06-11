import WrapperApp from "components/WrapperApp";
import ShoppingList from "components/ShoppingList";

const Buy = ({
               countProductInBasket,
               buy
             }) => {

  return (
    <WrapperApp countProductInBasket={countProductInBasket}>
      <ShoppingList />
    </WrapperApp>
  )
}

export default Buy;