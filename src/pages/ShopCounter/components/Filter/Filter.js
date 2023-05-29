import React from "react";
import PropTypes from "prop-types";
import Select from "components/Select";
import Tabs from "components/Tabs";
import Switch from "components/Switch";
import Autocomplete from "components/Autocomplete";
import InputsRange from "components/InputsRange";

import cl from "./Filter.module.scss";

const Filter = ({
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
}) => {

  return (
    <div className={cl.filter}>
      <Select
        name="Жанр"
        options={genres.map(v => v.title)}
        values={selectedGenres}
        onSelect={onSelectGenre}
      />
      <Autocomplete
        options={authors}
        inputtedValue={inputtedAuthor}
        onChange={onChangeAuthor}
      />
      <Autocomplete
        title="Город"
        options={cities}
        inputtedValue={inputtedCity}
        onChange={onChangeCity}
      />
      <Select
        name="Список топ продавцов"
        options={topSellers.map(v => v.name)}
        values={selectedTopSellers}
        onSelect={onSelectTopSellers}
      />
      <Select
        name="Тип продавца (ЮЛ, ЧЛ, ООО)"
        options={typesSeller.map(v => v.name)}
        values={selectedTypesSeller}
        onSelect={onSelectTypesSeller}
      />
      <Tabs
        title="Тип продавца"
        tags={typesProduct}
        selectTag={selectedTypeProduct}
        className={cl.filter__tabs}
        onSelectTag={onSelectTypeProduct}
        onResetTag={() => onSelectTypeProduct({})}
      />
      <Switch
        categories={categories}
        onChangeCategory={onChangeCategory}
      />
      <InputsRange
        type="price"
        rangeValue={rangeValuePrice}
        getOnChangeRangeValue={getOnChangeRangeValuePrice}
      />
      <InputsRange
        type="rating"
        title="Рейтинг"
        maxCountNumber={2}
        rangeValue={rangeValueRating}
        getOnChangeRangeValue={getOnChangeRangeValueRating}
      />
      <InputsRange
        type="year"
        title="Год выпуска"
        maxCountNumber={4}
        rangeValue={rangeValueYear}
        getOnChangeRangeValue={getOnChangeRangeValueYear}
      />
    </div>
  )
}

Filter.propTypes = {
  genres: PropTypes.array,
  selectedGenres: PropTypes.array,
};

Filter.defaultProps = {
  genres: [],
  selectedGenres: [],
};


export default Filter;