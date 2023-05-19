import PropTypes from "prop-types";
import cn from "classnames";
import {Chip} from "@mui/material";
import cl from "./Genres.module.scss";

const Genres = ({genres, currentGenre, className, onSelectGenre}) => {

  return (
    <div className={cn(cl.genres, className)}>
      <div className={cl.genres__title}>Жанры</div>
      <div className={cl.genres__chips}>
        {
          genres.length ? (
            genres.map(g => (
              <Chip
                label={g.title}
                color={g.id === currentGenre.id ? "primary" : "default"}
                variant={g.id === currentGenre.id ? "primary" : "outlined"}
                onClick={() => onSelectGenre(g)}
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
  genres: PropTypes.string,
  currentGenre: PropTypes.string,
  className: PropTypes.string,
  onSelectGenre: PropTypes.func,
};

Genres.defaultProps = {
  genres: [],
  currentGenre: "",
  onSelectGenre: () => {},
};

export default Genres;