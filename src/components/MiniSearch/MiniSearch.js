import React from "react";
import SearchBar from "components/SearchBar";

import PopularTags from "./components/PopularTags";
import Genres from "./components/Genres";

import cl from "./MiniSearch.module.scss";

const MiniSearch = ({
  tags,
  currentGenre,
  genres,
  onSearch,
  onSelectGenre,
}) => {

  return (
    <div className={cl.search}>
      <SearchBar
        className={cl.search__bar}
        onSearch={onSearch}
      />
      <PopularTags
        tags={tags}
        className={cl.search__tags}
      />
      <Genres
        genres={genres}
        currentGenre={currentGenre}
        onSelectGenre={onSelectGenre}
        className={cl.search__genres}
      />
      <div>
        Список книг undefined
      </div>
    </div>
  )
}

export default MiniSearch;