import PropTypes from "prop-types";
import WrapperApp from "components/WrapperApp";
import Button from "components/Button";
import EmptySearch from "components/EmptySearch";
import Carousel from "components/Carousel";
import ButtonIcon from "components/ButtonIcon";
import reduceMoney from "helpers/reduceMoney"
import cn from "classnames";

import cl from "./Sale.module.scss";
import {ReactComponent as BookSVG} from "./static/book.svg";
import {ReactComponent as EditionSVG} from "./static/edit.svg";
import {ReactComponent as CheckMarkSVG} from "./static/checkMark.svg";

const Sale = ({
  books,
  countProductInBasket,
  pathToImage,
  onClickAddBook
}) => {

  return (
    <WrapperApp  countProductInBasket={countProductInBasket} className={cl.container}>
      <div className={cl.header}>
        <h1>
          Список книг, выставленных на продажу
        </h1>
        <Button
          className={cl.header__button}
          endIcon={<BookSVG />}
          onClick={onClickAddBook}
        >
          Добавить книгу на продажу
        </Button>
      </div>
      <div className={cl.infoPay}>
        <div>
          <div className={cn(cl.books, cl.infoPay__block)}>...</div>
          <div>- оплата вне сервиса</div>
        </div>
        <div>
          <div className={cn(cl.books, cl.books__withPay, cl.infoPay__block)}>
            ...
            <div className={cl.books__statusPay}>
              <div>
                {<CheckMarkSVG className={cl.books__svgPay}/>}
              </div>
              <div>
                С оплатой на сервисе
              </div>
            </div>
          </div>
          <div>- оплата на сервисе</div>
        </div>
      </div>
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
                <h3>Заданная информация о товаре</h3>
                <div className={cl.books__info}>
                  <div>Название: {b.title ? b.title : "Не указано"}</div>
                  <div>Цена: {b.price ? reduceMoney(b.price) : "Не указано"}</div>
                  <div>Описание: {b.description ? b.description : "Не указано"}</div>
                  <div>Город нахождения товара: {b.city ? b.city : "Не указано"}</div>
                  <div></div>
                </div>
              </div>
              <div className={cl.books__right}>
                <ButtonIcon
                  className={cl.books__buttonIcon}
                  icon={<EditionSVG className={cl.books__svg} />}
                />
              </div>

              {
                b.withPay && (
                  <div className={cl.books__statusPay}>
                    <div>
                      С оплатой на сервисе
                    </div>
                    <div>
                      {<CheckMarkSVG className={cl.books__svgPay}/>}
                    </div>
                  </div>
                )
              }
            </div>
          ))
          : (
            <EmptySearch
              title="У вас пока нет выставленных на продажу книг"
              className={cl.empty}
            />
          )
      }
    </WrapperApp>
  )
}


Sale.propTypes = {
  books: PropTypes.array,
  countProductInBasket: PropTypes.number,
  onClickAddBook: PropTypes.func,
};

Sale.defaultProps = {
  books: [],
  onClickAddBook: () => {},
};

export default Sale;