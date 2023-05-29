import React from "react";
import Header from "components/Header";
import Container from "components/Container";
import SearchBar from "components/SearchBar";
import Pagination from "components/Pagination";

import Filter from "./components/Filter";
// import Sort from "./components/Sort";
import ListBook from "./components/ListBook";
import cl from "./ShopCounter.module.scss"


const ShopCounter = ({
                       //ФИЛЬТРЫ
                       searchString,
                       onChangeSearchString,

                       genres,
                       selectedGenres,
                       onSelectGenre,
                       topSellers,
                       selectedTopSellers,
                       onSelectTopSellers,
                       typesSeller,
                       selectedTypesSeller,
                       onSelectTypesSeller,

                       authors,
                       inputtedAuthor,
                       onChangeAuthor,
                       cities,
                       inputtedCity,
                       onChangeCity,

                       typesProduct,
                       selectedTypeProduct,
                       onSelectTypeProduct,

                       categories,
                       onChangeCategory,

                       rangeValuePrice,
                       getOnChangeRangeValuePrice,
                       rangeValueRating,
                       getOnChangeRangeValueRating,
                       rangeValueYear,
                       getOnChangeRangeValueYear,

                       //КНИГИ
                       books,
                       pathBook,
                       pathAvatar,

  //ПАГИНАЦИЯ
                       countPage,
                       currentPage,
                       onChangePage,
}) => {

  return (
    <div>
      <Header className={cl.header}/>
      <Container>
        <SearchBar
          className={cl.search}
          searchString={searchString}
          // onSearch={}
          onChangeSearchString={onChangeSearchString}
        />
        <div className={cl.layout}>
          <Filter
            genres={genres}
            selectedGenres={selectedGenres}
            onSelectGenre={onSelectGenre}
            topSellers={topSellers}
            selectedTopSellers={selectedTopSellers}
            onSelectTopSellers={onSelectTopSellers}
            typesSeller={typesSeller}
            selectedTypesSeller={selectedTypesSeller}
            onSelectTypesSeller={onSelectTypesSeller}

            authors={authors}
            inputtedAuthor={inputtedAuthor}
            onChangeAuthor={onChangeAuthor}
            cities={cities}
            inputtedCity={inputtedCity}
            onChangeCity={onChangeCity}

            typesProduct={typesProduct}
            selectedTypeProduct={selectedTypeProduct}
            onSelectTypeProduct={onSelectTypeProduct}

            categories={categories}
            onChangeCategory={onChangeCategory}

            rangeValuePrice={rangeValuePrice}
            getOnChangeRangeValuePrice={getOnChangeRangeValuePrice}
            rangeValueRating={rangeValueRating}
            getOnChangeRangeValueRating={getOnChangeRangeValueRating}
            rangeValueYear={rangeValueYear}
            getOnChangeRangeValueYear={getOnChangeRangeValueYear}
          />
          <div>
            {/*<Sort />*/}
            <ListBook
              books={books}
              pathBook={pathBook}
              pathAvatar={pathAvatar}
            />
          </div>
        </div>
        <Pagination
          countPage={countPage}
          currentPage={currentPage}
          onChangePage={onChangePage}
        />
      </Container>
    </div>
  )
}

export default ShopCounter;