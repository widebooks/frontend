import React from "react";
import Card from "components/Card";

import cl from "./ListBook.module.scss";

const ListBook = ({
                    books,
                    pathBook,
                    pathAvatar,
}) => {

  return (
    <div className={cl.list}>
      {books.map(b => (
        <Card
          key={b.id}
          book={b}
          pathBook={pathBook}
          pathAvatar={pathAvatar}
        />
      ))}
    </div>
  )
}

export default ListBook;