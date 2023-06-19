import PropTypes from "prop-types";
import Button from "components/Button";
import EmptySearch from "components/EmptySearch";
import Carousel from "components/Carousel";
import ButtonIcon from "components/ButtonIcon";
import reduceMoney from "helpers/reduceMoney"
import cn from "classnames";

import cl from "./Exchange.module.scss";
import {ReactComponent as EditionSVG} from "./static/edit.svg";

const Exchange = ({
  books,
  pathToImage,
}) => {

  return (
    <div className={cl.container}>
      <h3>Выберите книгу для предложения обмена</h3>
      {
        !!books.length ?
          books.slice(0,2).map(b => (
            <div className={cn(cl.books, {
              [cl.books__withPay]: b.withPay
            })}>
              <div key={b.id} className={cl.books__left}>
                <Carousel
                  items={Array.isArray(b?.images) ? b.images.map((v, id) => ({srcImg: v, id})) : undefined}
                  pathToImage={pathToImage}
                  className={cl.carousel}
                  classNameImage={cl.carousel__image}
                />
              </div>
              <div className={cl.books__center}>
                <div className={cl.books__info}>
                  <div>Название: {b.title ? b.title : "Не указано"}</div>
                  <div>Цена: {b.price ? reduceMoney(b.price) : "Не указано"}</div>
                </div>
              </div>
              <div className={cl.books__right}>
                <Button
                  className={cl.books__buttonIcon}
                >
                  Предложить обмен
                </Button>
              </div>
            </div>
          ))
          : (
            <EmptySearch
              title="Вам нечего предложить на обмен, т.к. вы ничего не продаёте"
              className={cl.empty}
            />
          )
      }
    </div>
  )
}


Exchange.propTypes = {
  books: PropTypes.array,
  countProductInBasket: PropTypes.number,
  onClickAddBook: PropTypes.func,
};

Exchange.defaultProps = {
  books: [],
  onClickAddBook: () => {},
};

export default Exchange;