import { makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import DirectionsIcon from "@material-ui/icons/Directions";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../App";

const useStyles = makeStyles({
  dropdown: {
    position: "absolute",
    top: "64px",
    right: "0",
    width: "200px",
    transform: "translateX(-3%)",
    backgroundColor: "whitesmoke",
    border: "1px solid gray",
    borderRadius: "8px",
    padding: "1rem",
    overflow: "hidden",
    zIndex: "1",
    boxShadow:
      "rgba(50, 50, 93, 0.4) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },
  menuItem: {
    height: "50px",
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    padding: "0.5rem",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "lightgray",
    },
  },
  iconButton: {
    margin: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

function Dropdown() {
  const classes = useStyles();
  const user = useContext(UserContext);
  useEffect(() => {
  }, [user])
  return (
    <div className={classes.dropdown}>
      {!user.token ? (
        <>
          <DropDownItem text="Log In" icon={<DirectionsIcon />} to="login" />
          <DropDownItem
            text="Sign Up"
            icon={<AddCircleOutlineIcon />}
            to="signup"
          />
        </>
      ) : (
        <>
          <DropDownItem text="Feavorites" icon={<FavoriteIcon />} to="feavorites"/>
          <DropDownItem text="Log Out" icon={<ExitToAppIcon />} to="logout"/>
        </>
      )}
    </div>
  );
}
export default Dropdown;

function DropDownItem(props) {
  const classes = useStyles();
  return (
    <Link to={`/${props.to}`} className={classes.menuItem}>
      <span className={classes.iconButton} style={{ marginRight: "15px" }}>
        {props.icon}
      </span>
      <p>{props.text}</p>
    </Link>
  );
}
