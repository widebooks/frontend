import PropTypes from "prop-types";
import {default as BadgeMui} from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon  from '@mui/icons-material/ShoppingCart';

import cl from "./Badge.module.scss";

const Badge = ({
  count,
  type
}) => {
  return (
    <BadgeMui badgeContent={count} color="primary">
      {type === "message" && <MailIcon color="action" className={cl.badge__icon}/>}
      {type === "basket" && <ShoppingCartIcon  className={cl.badge__icon}/>}
    </BadgeMui>
  )
}

Badge.propTypes = {
  count: PropTypes.number,
  type: PropTypes.oneOf(["basket", "message"]),
};

Badge.defaultProps = {
  type: "basket",
};

export default Badge;