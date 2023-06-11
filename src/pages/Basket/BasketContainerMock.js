import {useState} from "react";
import flatMap from "lodash/flatMap";
import {PATH_BOOKS_MODEL_FRONT} from "constants";

import Basket from "./Basket";
import basketMock from "./mock/BasketMock";

const BasketContainerMock = () => {
  const [buy, setBuy] = useState(basketMock)

  return (
    <Basket
      countProductInBasket={10}
      buy={buy}
      pathToImage={PATH_BOOKS_MODEL_FRONT}
      onHandleDelete={(id) => setBuy(buy => ({
        ...buy,
        listBuy: buy.listBuy.filter(v => v.id !== id)
      }))}
      onClickMinus={(parm) => setBuy(buy => ({
        ...buy,
        listBuy: flatMap(buy.listBuy, (v => {
          if (v.id === parm.id) {
            return {...v, count: --v.count}
          }
          return v;
        }))
      }))}
      onClickPlus={(parm) => setBuy(buy => ({
        ...buy,
        listBuy: flatMap(buy.listBuy, (v => {
          if (v.id === parm.id) {
            return {...v, count: ++v.count}
          }
          return v;
        }))
      }))}
    />
  )
}

export default BasketContainerMock;