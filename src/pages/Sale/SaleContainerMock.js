import {PATH_BOOKS_MODEL_FRONT} from "constants";

import Sale from "./Sale";

import mockBooks from "./mock/mockBooks";

const SaleContainerMock = () => {

  return (
    <Sale
      countProductInBasket={5}
      pathToImage={PATH_BOOKS_MODEL_FRONT}
      books={mockBooks}
    />
  )
}

export default SaleContainerMock;