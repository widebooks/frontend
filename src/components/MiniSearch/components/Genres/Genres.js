import cl from "./Genres.module.scss";
import {Chip} from "@mui/material";

const Genres = () => {

  return (
    <div className={cl.genres}>
      <div className={cl.genres__title}>Жанры</div>
      <div>
        <Chip label="1 жанр" variant="outlined" />
      </div>
    </div>
  )
}

export default Genres;