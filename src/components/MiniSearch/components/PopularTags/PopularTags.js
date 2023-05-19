import PropTypes from "prop-types";
import cn from "classnames";
import {Button, ButtonGroup} from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import cl from "./PopularTags.module.scss";

const PopularTags = ({tags, className}) => {

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
          tags.map(t => <Button key={t.id}>{t.title}</Button>)
        }
      </ButtonGroup>
    </StyledEngineProvider>
  )
}

PopularTags.propTypes = {
  tags: PropTypes.array,
  className: PropTypes.string,
};

PopularTags.defaultProps = {
  tags: []
};


export default PopularTags;