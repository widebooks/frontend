import Product from "./Product";

import bookMock from "./mock/bookMock";
import {PATH_BOOKS_MODEL_FRONT} from "constants";

const ProductContainerMock = () => {
  return (
    <Product
      book={bookMock}
      pathToImage={PATH_BOOKS_MODEL_FRONT}
    />
  )
}

export default ProductContainerMock;