import Book from "./component/Book";
import cl from "./ListBooks.module.scss";

const ListBooks = ({
  books,
  pathBook,
  pathAvatar
}) => {
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