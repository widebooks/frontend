import {useState} from "react";
import PropTypes from "prop-types";
import WrapperApp from "components/WrapperApp";
import Carousel from "components/Carousel";
import Button from "components/Button";
import reduceMoney from "helpers/reduceMoney";
import {Rating, Dialog} from "@mui/material";
import cn from "classnames";

import cl from "./Product.module.scss";
import {ReactComponent as BusketSVG} from "./static/basket.svg";
import {ReactComponent as StarSVG} from "./static/start.svg";
import ExchangeContainerMock from "./components/Exchange";

const Product = ({
                   book,
                   countProductInBasket,
                   pathToImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getGenres = () => book.genres ?
    book.genres.map(g => g.title).join(", ") :
    "Не стандартный жанр"

  return (
    <WrapperApp countProductInBasket={countProductInBasket}>
      <div className={cl.content}>
       <div className={cl.content__left}>
         <Carousel
           items={book.images.map((v, id) => ({srcImg: v, id}))}
           pathToImage={pathToImage}
           className={cl.carousel}
           classNameImage={cl.carousel__image}
         />
       </div>
        <div className={cn(cl.content__right, cl.info)}>
          <h2 className={cl.info__title}>
            {book.title}
          </h2>
          <div className={cl.info__money}>
            Цена: {reduceMoney(book.price)}
          </div>
          <div className={cl.info__money}>
            Контакты продавца для покупки вне сервиса: {book.contacts}
          </div>
          <Rating
            name="half-rating"
            defaultValue={book.rating}
            precision={0.1}
            readOnly
            max={10}
            className={cl.info__rating}
          />
          <div className={cl.info__genre}>
            Относится к жанрам(-у): {getGenres()}
          </div>
          <div className={cl.info__text}>
            <span>Описание</span>: {book.description ? book.description : "Описание к товару отсутствует"}
          </div>
         <div className={cl.info__buttons}>
           <Button className={cl.info__button} onClick={() => setIsOpen(true)}>
             <div>Предложить обмен</div>
           </Button>
           <Button className={cl.info__button} disabled>
             <div>
               Добавить в корзину
             </div>
             <BusketSVG className={cl.info__svg}/>
           </Button>
           <Button variant="outlined" className={cl.info__button} disabled>
             <div>Добавить в избранное</div>
             <StarSVG className={cl.info__svg}/>
           </Button>
         </div>
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <ExchangeContainerMock />

          </Dialog>
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