import Product from "./Product";

import bookMock from "./mock/bookMock";

const ProductContainerMock = () => {
  return (
    <Product
      book={bookMock}
    />
  )
}

export default ProductContainerMock;