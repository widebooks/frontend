import EmptySearch from "components/EmptySearch";
import Book from "widgets/MiniSearch/components/ListBooks/component/Book";

import cl from "./ListBook.module.scss";

const ListBook = ({
  books,
  pathBook,
  pathAvatar
}) => {
  console.log('books_in_ListBook', books)
  if (!books.length) {
    return <EmptySearch className={cl.list}/>
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

export default ListBook;