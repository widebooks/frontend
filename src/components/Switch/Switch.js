import PropTypes from "prop-types";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import {default as SwitchMui} from '@mui/material/Switch';

import cl from "./Switch.module.scss";

const CATEGORIES = {
  museumExhibit: "Музейный экспонат",
  antiquary: "Антиквар",
  handwritten: "Рукопись",
}

const Switch = ({
                      title,
                      categories,
                      onChangeCategory,
}) => {
  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      subheader={<ListSubheader className={cl.list__title}>
        <span>
          {title}
        </span>
      </ListSubheader>}
      className={cl.list}
    >
      {
        Object.keys(categories).map((key , i) => (
          <ListItem key={i} className={cl.list__item}>
            {/*<ListItemIcon>*/}
            {/*  <WifiIcon />*/}
            {/*</ListItemIcon>*/}
            <ListItemText id={`switch-list-label-${key}`} primary={CATEGORIES[key]} />
            <SwitchMui
              edge="end"
              onChange={() => onChangeCategory(key)}
              checked={categories[key]}
              inputProps={{
                'aria-labelledby': `switch-list-label-${key}`,
              }}
            />
          </ListItem>
        ))
      }
    </List>
  )

  // Как было (с картинками), возможно потом пригодится
  // const [checked, setChecked] = useState(['museumExhibit']);
  //
  // const handleChange = (event: SelectChangeEvent<typeof personName>) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };
  // return (
  //   <List
  //     sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
  //     subheader={<ListSubheader>Settings</ListSubheader>}
  //   >
  //     <ListItem>
  //       {/*<ListItemIcon>*/}
  //       {/*  <WifiIcon />*/}
  //       {/*</ListItemIcon>*/}
  //       <ListItemText id="switch-list-label-museum" primary="Музейный экспонат" />
  //       <Switch
  //         edge="end"
  //         onChange={handleToggle('museumExhibit')}
  //         checked={checked.indexOf('museumExhibit') !== -1}
  //         inputProps={{
  //           'aria-labelledby': 'switch-list-label-museum',
  //         }}
  //       />
  //     </ListItem>
  //     <ListItem>
  //       {/*<ListItemIcon>*/}
  //       {/*  <BluetoothIcon />*/}
  //       {/*</ListItemIcon>*/}
  //       <ListItemText id="switch-list-label-antiquary" primary="Антиквар" />
  //       <Switch
  //         edge="end"
  //         onChange={handleToggle('antiquary')}
  //         checked={checked.indexOf('antiquary') !== -1}
  //         inputProps={{
  //           'aria-labelledby': 'switch-list-label-antiquary',
  //         }}
  //       />
  //     </ListItem>
  //     <ListItem>
  //       {/*<ListItemIcon>*/}
  //       {/*  <BluetoothIcon />*/}
  //       {/*</ListItemIcon>*/}
  //       <ListItemText id="switch-list-label-handwritten" primary="Рукопись" />
  //       <Switch
  //         edge="end"
  //         onChange={handleToggle('handwritten')}
  //         checked={checked.indexOf('handwritten') !== -1}
  //         inputProps={{
  //           'aria-labelledby': 'switch-list-label-handwritten',
  //         }}
  //       />
  //     </ListItem>
  //   </List>
  // );
}

Switch.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.object,
  onChangeCategory: PropTypes.func,
};

Switch.defaultProps = {
  title: "Категории",
  categories: {},
  onChangeCategory: () => {},
};

export default Switch;