import PropTypes from "prop-types";
import Image from "components/Image";
import Avatar from "components/Avatar";
import {Rating} from "@mui/material";
import cn from "classnames";

import cl from "./Book.module.scss";

const Book = ({
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
          view="contain"
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
          <div className={cl.content__text}>
            {book.description ? book.description : "К данному товару отсутствует описание"}
          </div>
          <Avatar
            path={pathAvatar}
            file={book.avatar}
            name={book.seller}
          />
        </div>
      </div>
    </div>
  )
}

Book.propTypes = {
  pathBook: PropTypes.string,
  pathAvatar: PropTypes.string,
  book: PropTypes.object,
  className: PropTypes.string,
};

Book.defaultProps = {
  book: {}
};

export default Book