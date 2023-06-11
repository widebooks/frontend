import WrapperApp from "components/WrapperApp";
import ShoppingList from "./components/ShoppingList";

import cl from "./Buy.module.scss";

const Buy = ({
               countProductInBasket,
               buy,
               pathToImage,
               onHandleDelete,
               onClickMinus,
               onClickPlus
             }) => {

  return (
    <WrapperApp countProductInBasket={countProductInBasket} className={cl.wrapper}>
      <ShoppingList
        listBuy={buy.listBuy}
        pathToImage={pathToImage}
        onHandleDelete={onHandleDelete}
        onClickMinus={onClickMinus}
        onClickPlus={onClickPlus}
      />

    </WrapperApp>
  )
}

export default Buy;