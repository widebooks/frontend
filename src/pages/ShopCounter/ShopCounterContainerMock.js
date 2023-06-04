import {useEffect, useState} from "react";
import isSubstringString from "helpers/isSubstringString";
import {PATH_BOOKS_MODEL_FRONT, PATH_AVATARS_MODEL_FRONT} from "constants";

import ShopCounter from "./ShopCounter";
import mockGenres from "./mock/mockGenres";
import mockBooks from "./mock/mockBooks";
import mockTopSellers from "./mock/mockTopSellers";
import mockTypesSeller from "./mock/mockTypesSeller";
import mockAuthors from "./mock/mockAuthors";
import mockCities from "./mock/mockCities";

const TYPES_PRODUCT = [
  {
    id: 1,
    title: "Внешний источник"
  },
  {
    id: 2,
    title: "Сервис"
  }
]

const ShopCounterContainerMock = () => {
  const [searchString, setSearchString] = useState("");
  const [books, setBooks] = useState(mockBooks);

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedTopSellers, setSelectedTopSellers] = useState([]);
  const [selectedTypesSeller, setSelectedTypesSelle] = useState([]);

  const getHandleSelect = (mock, key, setter) => (event) => {
    const {
      target: { value },
    } = event;

    setter(value
      .map(v => mock
        .find(g => g[key] === v))
      .filter(v => v));
  }

  const [inputtedAuthor, setInputtedAuthor] = useState("");
  const [inputtedCity, setInputtedCity] = useState("");

  const [selectedTypeProduct, setSelectedTypeProduct] = useState({});

  const [categories, setCategories] = useState({
    museumExhibit: false,
    antiquary: false,
    handwritten: false,
  })

  const handleChangeCategory = (key) => {
    setCategories(v => ({
      ...v,
      [key]: !v[key]
    }))
  }

  const [rangeValuePrice, setRangeValuePrice] = useState({
    from: "",
    upTo: "",
  })
  const [rangeValueRating, setRangeValueRating] = useState({
    from: "",
    upTo: "",
  })
  const [rangeValueYear, setRangeValueYear] = useState({
    from: "",
    upTo: "",
  })
  const getOnChangeRangeValuePrice = (key) => (price) => {
    setRangeValuePrice(v => ({
      ...v,
      [key]: price
    }))
  }

  const getOnChangeRangeValueRating = (key) => (price) => {
    setRangeValueRating(v => ({
      ...v,
      [key]: price
    }))
  }

  const getOnChangeRangeValueYear = (key) => (price) => {
    setRangeValueYear(v => ({
      ...v,
      [key]: price
    }))
  }

  useEffect(() => {
    setBooks(() => mockBooks.filter(b => (
      isSubstringString(inputtedAuthor, b.author) &&
      isSubstringString(inputtedCity, b.city)
    )))

  },[inputtedCity, inputtedAuthor])

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ShopCounter
      //---------------ФИЛЬТРЫ---------------
      // Поисковая строка
      searchString={searchString}
      onChangeSearchString={v => setSearchString(v)}
      // Select`ы
      genres={mockGenres}
      selectedGenres={selectedGenres.map(v => v.title)}
      onSelectGenre={getHandleSelect(mockGenres, "title", setSelectedGenres)}
      topSellers={mockTopSellers}
      selectedTopSellers={selectedTopSellers.map(v => v.name)}
      onSelectTopSellers={getHandleSelect(mockTopSellers, "name", setSelectedTopSellers)}
      typesSeller={mockTypesSeller}
      selectedTypesSeller={selectedTypesSeller.map(v => v.name)}
      onSelectTypesSeller={getHandleSelect(mockTypesSeller, "name", setSelectedTypesSelle)}
      // Autocomplet`ы
      authors={mockAuthors.map(v => ({
        label: v.name
      }))}
      inputtedAuthor={inputtedAuthor}
      onChangeAuthor={v => setInputtedAuthor(v)}
      cities={mockCities.map(v => ({
        label: v.name
      }))}
      inputtedCity={inputtedCity}
      onChangeCity={v => setInputtedCity(v)}
      // Tab(один)
      typesProduct={TYPES_PRODUCT}
      selectedTypeProduct={selectedTypeProduct}
      onSelectTypeProduct={v => setSelectedTypeProduct(v)}
      // Categories
      categories={categories}
      onChangeCategory={handleChangeCategory}
      // Диапозоны (2 инпута тобеж)
      rangeValuePrice={rangeValuePrice}
      getOnChangeRangeValuePrice={getOnChangeRangeValuePrice}
      rangeValueRating={rangeValueRating}
      getOnChangeRangeValueRating={getOnChangeRangeValueRating}
      rangeValueYear={rangeValueYear}
      getOnChangeRangeValueYear={getOnChangeRangeValueYear}
      //---------------Книги---------------
      books={books.slice((currentPage - 1) * 10, currentPage * 10)}
      pathBook={PATH_BOOKS_MODEL_FRONT}
      pathAvatar={PATH_AVATARS_MODEL_FRONT}
      //------------Пагинация--------------
      countPage={Math.ceil(books.length / 10)}
      currentPage={currentPage}
      onChangePage={(_, v) => setCurrentPage(v)}
    />
  )
}

export default ShopCounterContainerMock;