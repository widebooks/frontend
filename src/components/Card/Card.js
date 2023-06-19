import PropTypes from "prop-types";
import Image from "components/Image";
import Avatar from "components/Avatar";
import ButtonLink from "components/ButtonLink";
import {Rating} from "@mui/material";
import cn from "classnames";

import cl from "./Card.module.scss";

const Card = ({
  pathBook,
  pathAvatar,
  book,
  className
}) => {
  return (
    <div className={cn(cl.book, className)}>
      <div className={cl.book__imageWrapper}>
        <Image
          path={pathBook}
          file={book.images?.[0]}
          type="book"
          className={cn({
            [cl.book__image]: book.images?.[0]
          })}
        />
      </div>
      <div className={cn(cl.content, cl.book__info)}>
        <div className={cl.content__header}>
          <div className={cl.content__title}>
            {book.title}
          </div>
          {book.rating && (
            <Rating
              name="half-rating"
              defaultValue={book.rating}
              precision={0.1}
              readOnly
              max={10}
            />
            )}
        </div>
        <div className={cl.content__main}>
          <div>
            Город: {book.city ? book.city : "К данному товару отсутствует город"}
          </div>
          <Avatar
            path={pathAvatar}
            file={book.avatar}
            name={book?.seller.name}
          />
        </div>
        <div className={cl.content__text}>
          {book.description ? book.description : "К данному товару отсутствует описание"}
        </div>
        {
          !!book.link && (
            <ButtonLink>
              Перейти на источник
            </ButtonLink>
          )
        }
      </div>
    </div>
  )
}

Card.propTypes = {
  pathBook: PropTypes.string,
  pathAvatar: PropTypes.string,
  book: PropTypes.object,
  className: PropTypes.string,
};

Card.defaultProps = {
  book: {}
};

export default Card