import {PATH_BOOKS_MODEL_FRONT} from "constants";

import Exchange from "./Exchange";

import mockBooks from "./mock/mockBooks";

const ExchangeContainerMock = () => {

  return (
    <Exchange
      countProductInBasket={5}
      pathToImage={PATH_BOOKS_MODEL_FRONT}
      books={mockBooks}
    />
  )
}

export default ExchangeContainerMock;