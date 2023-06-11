import Buy from "./Buy";

import buyMock from "./mock/buyMock";

const BuyContainerMock = () => {

  return (
    <Buy
      buy={buyMock}
      countProductInBasket={10}
    />
  )
}

export default BuyContainerMock;