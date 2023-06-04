import PropTypes from "prop-types";
import WrapperApp from "components/WrapperApp";
import Carousel from "components/Carousel";
import reduceMoney from "helpers/reduceMoney";
import {Rating} from "@mui/material";

import cl from "./Product.module.scss";

const Product = ({
                   book,
                   pathToImage,
}) => {

  return (
    <WrapperApp>
      <div className={cl.content}>
       <div className={cl.content__left}>
         <Carousel
           items={book.images.map((v, id) => ({srcImg: v, id}))}
           pathToImage={pathToImage}
           className={cl.carousel}
           classNameImage={cl.carousel__image}
         />
       </div>
        <div className={cl.content__right}>
          <h2>
            {book.title}
          </h2>
          <div>
            Цена: {reduceMoney(book.price)}
          </div>
          {
            !!book.genres.length && book.genres.join(',')
          }
          <Rating
            name="half-rating"
            defaultValue={book.rating}
            precision={0.1}
            readOnly
            max={10}
          />
          <div>
            {book.description}
          </div>
        </div>
      </div>
    </WrapperApp>
  )
}

Product.propTypes = {
  book: PropTypes.object,
  pathToImage: PropTypes.string,
  classNameImage: PropTypes.string,
};

Product.defaultProps = {
  book: {},
};


export default Product;