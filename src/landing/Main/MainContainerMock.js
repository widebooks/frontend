import {useState} from "react";
import Main from "./Main";

import mockTags from "./mock/mockTags";
import mockGenres from "./mock/mockGenres";

const MainContainerMock = () => {
  const [stringSearch, setStringSearch] = useState('');
  const [currentGenre, setCurrentGenre] = useState('');

  const handleSearch = (v) => {
    setStringSearch(v);
  }

  const handleSelectGenre = (v) => {
    setCurrentGenre(v);
  }

  return (
    <Main
      tags={mockTags}
      genres={mockGenres}
      currentGenre={currentGenre}
      onSearch={handleSearch}
      onSelectGenre={handleSelectGenre}
    />
  )
}

export default MainContainerMock;