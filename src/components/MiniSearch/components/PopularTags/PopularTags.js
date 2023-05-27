import PropTypes from "prop-types";
import cn from "classnames";
import {Button, ButtonGroup} from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import cl from "./PopularTags.module.scss";

const PopularTags = ({tags, selectTag, className, onSelectTag}) => {

  return (
    <StyledEngineProvider injectFirst>
      <div className={cl.title}>
        Наиболее популярные запросы
      </div>
      <ButtonGroup
        size="large"
        variant="text"
        aria-label="text button group"
        className={cn(cl.buttons, className)}>
        {
          tags.map(t => (
            <Button
              key={t.id}
              variant={selectTag?.id === t.id ? "contained" : "text"}
              onClick={() => onSelectTag(t)}
            >
              {t.title}
            </Button>
          ))
        }
      </ButtonGroup>
    </StyledEngineProvider>
  )
}

PopularTags.propTypes = {
  tags: PropTypes.array,
  selectTag: PropTypes.object,
  className: PropTypes.string,
  onSelectTag: PropTypes.func,
};

PopularTags.defaultProps = {
  tags: [],
  onSelectTag: () => {}
};


export default PopularTags;