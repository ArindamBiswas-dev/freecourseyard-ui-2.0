import {
  Dialog,
  makeStyles,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
  },
  textField: {
    width: "200%",
    margin: "0px 10px",
  },
  submitBtn: {
    marginTop: "30px",
    backgroundColor: "#afaffb",
    padding: "10px 30px",
    fontSize: "15px",
    border: "1px solid black",
    position: "relative",
    left: "46%",
    marginLeft: "-50px",
    fontWeight: "bold",
  },
}));

function LogInDialog({ isOpen, handleClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();

  const [errorObj, seterrorObj] = useState({
    eemail: false,
    epassword: false,
  });

  const [valueObj, setvalueObj] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    for (const value in valueObj) {
      if (valueObj[value] === "") {
        seterrorObj((prevState) => ({
          ...prevState,
          [`e${value}`]: true,
        }));
        return false;
      }
    }
    return true;
  };

  const onSubmitHandeler = (e) => {
    e.preventDefault();

    console.log("sumit click");

    if (validate()) {
      // send form data
      console.log("No error found...");
      seterrorObj({
        eemail: false,
        epassword: false,
      });

      // sendDataToServer(); check in server
    } else {
      console.log("error happend...");
    }
  };

  const onChangeHandelar = (e) => {
    const { name, value } = e.target;
    setvalueObj((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };
  return (
    <div>
      <Dialog fullScreen={fullScreen} open={isOpen} onClose={handleClose}>
        <div className={classes.root}>
          <form onSubmit={onSubmitHandeler}>
            <div className={classes.textField}>
              <TextField
                id="standard-basic"
                label="Title of Course"
                defaultValue=""
                error={errorObj.email ? true : false}
                helperText={errorObj.email ? "This field required" : ""}
                onChange={onChangeHandelar}
                name="title"
                type="text"
              />
            </div>
            <div className={classes.textField}>
              <TextField
                id="standard-basic"
                label="Instructor"
                defaultValue=""
                error={errorObj.password ? true : false}
                helperText={errorObj.password ? "This field required" : ""}
                onChange={onChangeHandelar}
                name="instructor"
                type="password"
              />
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
}

export default LogInDialog;
