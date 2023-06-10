import Card from "widgets/MiniSearch/components/ListBooks";
import EmptySearch from "components/EmptySearch";

import cl from "./ListBook.module.scss";

const ListBook = ({
  books,
  pathBook,
  pathAvatar
}) => {
  if (!books.length) {
    return <EmptySearch className={cl.list}/>
  }

  return (
    <div className={cl.list}>
      {books.map(b => (
        <Card
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