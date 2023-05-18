import PropTypes from "prop-types";
import cn from "classnames";
import {Button, ButtonGroup} from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import cl from "./PopularTags.module.scss";

const PopularTags = ({className}) => {

  return (
    <StyledEngineProvider injectFirst>
      <ButtonGroup
        size="large"
        variant="text"
        aria-label="text button group"
        className={cn(cl.buttons, className)}>
        <Button>1 самый популярный тэг</Button>
        <Button>2 самый популярный тэг</Button>
        <Button>3 самый популярный тэг</Button>
      </ButtonGroup>
    </StyledEngineProvider>
  )
}

PopularTags.propTypes = {
  className: PropTypes.string,
};

PopularTags.defaultProps = {
};


export default PopularTags;