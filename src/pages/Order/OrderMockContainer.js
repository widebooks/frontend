import Order from "./Order";

import basketMock from "./mock/BasketMock";

const OrderMockContainer = () => {
  const handleOnOrder = (buy, infoBuyer) => {
    console.log('buy', buy);
    console.log('infoBuyer', infoBuyer);
  }

  return (
    <Order
      buy={basketMock}
      countProductInBasket={10}
      onOrder={handleOnOrder}
    />
  )
}

export default OrderMockContainer