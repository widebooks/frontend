import React from "react";
import SearchBar from "components/SearchBar";

import PopularTags from "./components/PopularTags";
import Genres from "./components/Genres";

import cl from "./MiniSearch.module.scss";

const MiniSearch = () => {

  return (
    <div className={cl.search}>
      <SearchBar className={cl.search__bar}/>
      <PopularTags className={cl.search__tags}/>
      <Genres />
    </div>
  )
}

export default MiniSearch;