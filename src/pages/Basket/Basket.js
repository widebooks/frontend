import WrapperApp from "components/WrapperApp";
import Button from "components/Button";
import reduceMoney from "helpers/reduceMoney";
import ShoppingList from "./components/ShoppingList";

import cl from "./Basket.module.scss";

const Basket = ({
               countProductInBasket,
               buy,
               pathToImage,
               onHandleDelete,
               onClickMinus,
               onClickPlus,

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
      <div className={cl.footer}>
        <div>
          Выбранных книг на сумму <span className={cl.footer__price}>{reduceMoney(buy.commonPrice)}</span>
        </div>
        <Button className={cl.footer__button} variant="outlined">
          Перейти к оформлению заказа
        </Button>
      </div>
    </WrapperApp>
  )
}

export default Basket;