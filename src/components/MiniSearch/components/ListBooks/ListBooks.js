import cn from "classnames";
import Book from "./component/Book";
import cl from "./ListBooks.module.scss";

import {ReactComponent as BookWithCrossDeleteSymbol} from "./static/bookWithCrossDeleteSymbol.svg";

const ListBooks = ({
  books,
  pathBook,
  pathAvatar
}) => {
  if (!books.length) {
    return (
      <div className={cn(cl.list, cl.empty)}>
        <BookWithCrossDeleteSymbol className={cl.empty__svg}/>
        <div className={cl.empty__text}>
          По заданным фильтрам нет подходящей книги. Можете посмотреть товар другого жанра или измениить название
        </div>
      </div>
    )
  }

  return (
    <div className={cl.list}>
      {books.map(b => (
        <Book
          key={b.id}
          book={b}
          pathBook={pathBook}
          pathAvatar={pathAvatar}
          className={cl.list__item}
        />
      ))}
    </div>
  )
}

export default ListBooks;