import React, {useState} from "react";
import PropTypes from "prop-types";
import {Button, TextField} from "@mui/material";
import cn from "classnames";

import cl from "./SearchBar.module.scss";
import {ReactComponent as SearchSVG} from "./static/search.svg";

const SearchBar = ({
  searchString,
  className,
  onChangeSearchString,
  onSearch
}) => {

  return (
    <div className={cn(cl.search, className)}>
      <TextField
        id="standard-basic"
        label="Быстрый поиск книги"
        variant="standard"
        className={cl.search__input}
        value={searchString}
        onInput={(e) => onChangeSearchString(e?.target.value)}
      />
      <Button
        variant="outlined"
        startIcon={<SearchSVG className={cl.search__svg}/>}
        onClick={() => onSearch(searchString)}
      >
        Поиск
      </Button>
    </div>
  )
}

SearchBar.propTypes = {
  className: PropTypes.string,
  onChangeSearchString: PropTypes.func,
  obSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  onChangeSearchString: () => {},
  obSearch: () => {},
};

export default SearchBar;

