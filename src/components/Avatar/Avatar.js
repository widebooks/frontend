import {Avatar as AvatarMUI} from "@mui/material";
import PropTypes from "prop-types";

const Avatar = ({
  name,
  path,
  file,
  size
}) => {
  const sx = {width: size, height: size};

  if (path && file) {
    return (
      <AvatarMUI
        alt={name}
        src={`${path}/${file}`}
        sx={sx}
      />
    )
  }

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        ...sx,
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }


  return (
    <AvatarMUI {...stringAvatar(name ? name : "Мистер Х")} />
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  file: PropTypes.string,
  size: PropTypes.number,
};

Avatar.defaultProps = {
  name: "Мистер Х",
  size: 60,
};


export default Avatar;