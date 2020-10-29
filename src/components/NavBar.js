import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/avatar.png";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "30rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  ListItem: {
    color: "tan",
  },
}));
const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];
const NavBar = () => {
  const [state, setstate] = useState({ right: false });
  const toggleSlider = (slider, open) => () => {
    setstate({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (slider) => (
    <Box component="nav" className={classes.menuSliderContainer}>
      <Avatar className={classes.avatar} src={avatar} />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.ListItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={lsItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobileRightMenuSlider open={state.right}>
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
