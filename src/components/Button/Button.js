import PropTypes from "prop-types";
import cn from "classnames";
import {default as ButtonMui} from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import cl from "./Button.module.scss";

const ColorButton = styled(ButtonMui)(({ variant }) => {
  return (
    ({
      color: variant === "contained" ? '#fff' : "#3d5afe",
      backgroundColor: variant === "contained" ? '#42a5f5' : "none",
      borderColor:  variant === "outlined" ? '#2a3eb1' : "none",
      '&:hover': {
        backgroundColor: variant === "contained" ? '#3548CF' : "none",
        color: variant === "contained" ? '#b3e5fc ' : "none",
        borderColor: '#2a3eb1',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: variant === "contained" ? '#0062cc' : "none",
        borderColor: '#0d25b7',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    })
  )
});

const Button = ({
                  variant,
                  disabled,
                  type,
                  startIcon,
                  endIcon,
                  className,
                  children,
                  onClick
                }) => {
  return (
    <ColorButton
      variant={variant}
      disabled={disabled}
      type={type}
      className={cn(cl.button, className)}
      onClick={onClick}
    >
      {startIcon && (
        <div className={cl.button__svg}>
          {startIcon}
        </div>
      )}
      {children}
      {endIcon && (
        <div className={cl.button__svg}>
          {endIcon}
        </div>
      )}
    </ColorButton>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  startIcon: PropTypes.any,
  endIcon: PropTypes.any,
  children: PropTypes.any,
  onChange: PropTypes.func,
};

Button.defaultProps = {
  variant: "contained",
  onClick: () => {}
};

export default Button;