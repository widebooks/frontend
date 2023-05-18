import React from "react";
import PropTypes from "prop-types";
import {Button, TextField} from "@mui/material";
import cn from "classnames";

import cl from "./SearchBar.module.scss";
import {ReactComponent as SearchSVG} from "./static/search.svg";

const SearchBar = ({
  className,
  onInput,
  obSearch
}) => {

  return (
    <div className={cn(cl.search, className)}>
      <TextField
        id="standard-basic"
        label="Быстрый поиск книги"
        variant="standard"
        className={cl.search__input}
      />
      <Button
        variant="outlined"
        startIcon={<SearchSVG className={cl.search__svg}/>}
      >
        Поиск
      </Button>
    </div>
  )
}

SearchBar.propTypes = {
  className: PropTypes.string,
  onInput: PropTypes.func,
  obSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  onInput: () => {},
  obSearch: () => {},
};

export default SearchBar;

