import PropTypes from "prop-types";
import cn from "classnames";
import {Chip} from "@mui/material";
import cl from "./Genres.module.scss";

const Genres = ({genres, currentGenres, className, onSelectGenre}) => {
  const isSelectGenre = (v) => {
    if (!currentGenres) {
      return false
    }

    return currentGenres.map(v => v.id).includes(v.id)
  }

  return (
    <div className={cn(cl.genres, className)}>
      <div className={cl.genres__title}>Жанры</div>
      <div className={cl.genres__chips}>
        {
          genres.length ? (
            genres.map(g => (
              <Chip
                key={g.id}
                label={g.title}
                color={isSelectGenre(g) ? "primary" : "default"}
                variant={isSelectGenre(g) ? "primary" : "outlined"}
                onClick={() => onSelectGenre(g)}
                onDelete={isSelectGenre(g) ? () => onSelectGenre(g) : null}
              />
            ))
          ) : (
            <div>
              Нет доступных жанров
            </div>
          )
        }
      </div>
    </div>
  )
}

Genres.propTypes = {
  genres: PropTypes.array,
  currentGenres: PropTypes.array,
  className: PropTypes.string,
  onSelectGenre: PropTypes.func,
};

Genres.defaultProps = {
  genres: [],
  currentGenres: [],
  onSelectGenre: () => {},
};

export default Genres;