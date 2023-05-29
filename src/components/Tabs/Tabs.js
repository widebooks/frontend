import PropTypes from "prop-types";
import cn from "classnames";
import {Button, ButtonGroup, IconButton} from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import cl from "./Tabs.module.scss";

const Tabs = ({title, tags, selectTag, className, classNameTitle, onSelectTag, onResetTag}) => {

  return (
    <StyledEngineProvider injectFirst>
      { title && (
        <div className={cn(cl.title, classNameTitle)}>
          <div>
            {title}
          </div>
          {
            onResetTag && (
              <div className={cl.delete}>
                {
                  selectTag?.id && (
                    <IconButton aria-label="delete" size="small" onClick={onResetTag}>
                      <HighlightOffIcon fontSize="inherit" />
                    </IconButton>
                  )
                }
              </div>
            )
          }
        </div>
      )}
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
              className={cl.button}
            >
              {t.title}
            </Button>
          ))
        }
      </ButtonGroup>
    </StyledEngineProvider>
  )
}

Tabs.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
  selectTag: PropTypes.object,
  className: PropTypes.string,
  onResetTag: PropTypes.func,
  onSelectTag: PropTypes.func,
};

Tabs.defaultProps = {
  tags: [],
  onSelectTag: () => {}
};


export default Tabs;