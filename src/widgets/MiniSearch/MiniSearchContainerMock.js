import {useEffect, useState} from "react";
import isSubstringString from "helpers/isSubstringString";
import {PATH_BOOKS_MODEL_FRONT, PATH_AVATARS_MODEL_FRONT} from "constants";

import MiniSearch from "./MiniSearch";
import mockTags from "./mock/mockTags";
import mockGenres from "./mock/mockGenres";
import mockBooks from "./mock/mockBooks";

const MainContainerMock = () => {
  const [searchString, setSearchString] = useState('');
  const [selectTag, setSelectTag] = useState(null);
  const [currentGenres, setCurrentGenres] = useState([]);
  const [books, setBooks] = useState(mockBooks);

  const handleSearch = (s) => {
    setSearchString(s);
  }

  const handleSelectGenre = (genre) => {
    if (currentGenres.map(v => v.id)?.includes(genre.id)) {
      return setCurrentGenres(v => v.filter(g => g.id !== genre.id))
    }

    setCurrentGenres(v => [...v, genre]);
  }

  useEffect(() => {
    setBooks(mockBooks.filter(b => {

      return ((isSubstringString(searchString, b.title) ||
          isSubstringString(searchString, b.description)
        ) &&
        (
          currentGenres.length ?
            b?.genres?.find(g => currentGenres
              .map(b => b.id).includes(g.id)) :
            true
        ))
    }))

  }, [searchString, currentGenres])

  useEffect(() => {
    if (!selectTag?.title) {
      return;
    }

    setSearchString(selectTag.title);
  }, [selectTag])

  return (
    <MiniSearch
      searchString={searchString}
      books={books}
      tags={mockTags}
      selectTag={selectTag}
      genres={mockGenres}
      currentGenres={currentGenres}
      pathBook={PATH_BOOKS_MODEL_FRONT}
      pathAvatar={PATH_AVATARS_MODEL_FRONT}
      onSearch={handleSearch}
      onChangeSearchString={v => {setSearchString(v); setSelectTag({})}}
      onSelectTag={(v) => setSelectTag(v)}
      onSelectGenre={handleSelectGenre}
    />
  )
}

export default MainContainerMock;