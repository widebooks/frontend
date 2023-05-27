import React from "react";
import SearchBar from "components/SearchBar";

import PopularTags from "./components/PopularTags";
import Genres from "./components/Genres";
import ListBooks from "./components/ListBooks";

import cl from "./MiniSearch.module.scss";

const MiniSearch = ({
  searchString,
  books,
  tags,
  selectTag,
  currentGenres,
  genres,
  pathBook,
  pathAvatar,
  onSearch,
  onChangeSearchString,
  onSelectTag,
  onSelectGenre,
}) => {

  return (
    <div className={cl.search}>
      <SearchBar
        className={cl.search__bar}
        searchString={searchString}
        onSearch={onSearch}
        onChangeSearchString={onChangeSearchString}
      />
      <PopularTags
        tags={tags}
        selectTag={selectTag}
        className={cl.search__tags}
        onSelectTag={onSelectTag}
      />
      <Genres
        genres={genres}
        currentGenres={currentGenres}
        className={cl.search__genres}
        onSelectGenre={onSelectGenre}
      />
      <ListBooks
        books={books}
        pathBook={pathBook}
        pathAvatar={pathAvatar}
      />
    </div>
  )
}

export default MiniSearch;