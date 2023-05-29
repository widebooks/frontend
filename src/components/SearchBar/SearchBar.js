import React, {useState} from "react";
import PropTypes from "prop-types";
import {Button, TextField} from "@mui/material";
import cn from "classnames";

import cl from "./SearchBar.module.scss";
import {ReactComponent as SearchSVG} from "./static/search.svg";

const SearchBar = ({
  title,
  searchString,
  className,
  onChangeSearchString,
  onSearch
}) => {

  return (
    <div className={cn(cl.search, className)}>
      <TextField
        id="standard-basic"
        label={title}
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
  title: PropTypes.string,
  className: PropTypes.string,
  onChangeSearchString: PropTypes.func,
  onSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  title: "Поиск книги",
  onChangeSearchString: () => {},
  onSearch: () => {},
};

export default SearchBar;

