import {useEffect, useState} from "react";
import isSubstringString from "helpers/isSubstringString";

import MiniSearch from "./MiniSearch";
import mockTags from "./mock/mockTags";
import mockGenres from "./mock/mockGenres";
import mockBooks from "./mock/mockBooks";


export default {
  title: "Widgets/MiniSearch",
  component: MiniSearch,
  argTypes: {},
  decorators: [
    Story => (
      <div style={{ margin: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = () => {
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
    setBooks(mockBooks.filter(v => {

      return ((isSubstringString(searchString, v.title) ||
          isSubstringString(searchString, v.description)
        ) &&
        (
          currentGenres.length ? v?.genres?.find(g => currentGenres.map(v => v.id).includes(g)) : true
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
      pathBook="images/books"
      pathAvatar="images/avatars"
      onSearch={handleSearch}
      onChangeSearchString={v => {setSearchString(v); setSelectTag({})}}
      onSelectTag={(v) => setSelectTag(v)}
      onSelectGenre={handleSelectGenre}
    />
  );
};

export const Default = {
  render: () => <Template />,
};
