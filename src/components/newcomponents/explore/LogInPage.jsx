import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import MuiAppBar from "./appbarComponent/MuiAppBar";
import { UserContext, SetUserContext } from "../../../App";
import Footer from "./footerComponent/Footer";
import MuiAlert from "@material-ui/lab/Alert";

const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
  },
  formDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  inputField: {
    width: "100%",
    margin: "10px",
  },
  submitBtn: {
    marginTop: "30px",
    backgroundColor: "#afaffb",
    padding: "10px 30px",
    fontSize: "15px",
    border: "1px solid black",
    fontWeight: "bold",
  },
});

function LogInPage(props) {
  const isLogIn = props.isLogIn;

  const [showPassword, setShowPassword] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [status, setStatus] = useState("");
  const [statusErr, setStatusErr] = useState(false);

  const handleClose = () => {
    setOpenSnackBar(false);
  };

  const user = useContext(UserContext);
  const setUser = useContext(SetUserContext);

  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorObj, seterrorObj] = useState({
    ename: isLogIn ? true : false,
    eemail: false,
    epassword: false,
  });

  const handleChange = (prop) => (event) => {
    // console.log(values);
    const val = event.target.value.trim();

    setValues({ ...values, [prop]: val });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    for (const value in values) {
      if (isLogIn && value === "name") continue;

      if (value === "email") {
        if (values[value].match(emailPattern)) {
          return true;
        } else {
          seterrorObj((prevState) => ({
            ...prevState,
            [`e${value}`]: true,
          }));
          return false;
        }
      }

      if (values[value] === "") {
        seterrorObj((prevState) => ({
          ...prevState,
          [`e${value}`]: true,
        }));
        return false;
      }
    }
    return true;
  };

  const onSubmitHandeler = async (e) => {
    e.preventDefault();

    console.log("login submit click");

    if (validate()) {
      // send form data
      try {
        const urlPoint = isLogIn ? `login` : `signup`;
        let res = await axios.post(
          `https://freecourseyard-backend.glitch.me/${urlPoint}`,
          values
        );
        setStatus(res.data.status);
        setOpenSnackBar(true);
        if (res.data.status === "logIN Successfull") {
          localStorage.setItem("token", res.data.token);
          setUser({ token: res.data.token });
          console.log(user.token);
        }
        if(res.data.status !== 'User Created') setStatusErr(true);
        else setStatusErr(false);
        console.log(res.data.status);
        seterrorObj({
          ename: "",
          eemail: "",
          epassword: "",
        });
        console.log(values);
      } catch (error) {
        alert(error.message);
      }
    } else {
      console.log("error happend in log in...");
    }
  };

  const passwordText = isLogIn
    ? `Enter your password`
    : `Please enter a password of 8 to 16 character. 
                                      Consist of atleast one capital & small letter, one digit and one spacial character`;

  const classes = useStyle();

  if (user.token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <MuiAppBar isHide={true} />
      <div className={classes.root}>
        {isLogIn ? <h1>Log In</h1> : <h1>Sign Up</h1>}
        <form autoComplete="off" onSubmit={onSubmitHandeler}>
          <div className={classes.formDiv}>
            {!isLogIn && (
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                className={classes.inputField}
                onChange={handleChange("name")}
                error={errorObj.ename ? true : false}
                helperText={errorObj.ename ? "This field required" : ""}
              />
            )}

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.inputField}
              onChange={handleChange("email")}
              error={errorObj.eemail ? true : false}
              helperText={errorObj.eemail ? "This field required" : ""}
            />
            <Tooltip
              disableFocusListener
              placement="top"
              title={passwordText}
              arrow
            >
              <FormControl variant="outlined" className={classes.inputField}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  // value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                  error={errorObj.epassword ? true : false}
                  helperText={errorObj.epassword ? "This field required" : ""}
                />
              </FormControl>
            </Tooltip>
            <Button
              disableElevation
              className={classes.submitBtn}
              type="submit"
            >
              {isLogIn ? <>Log In</> : <>Sign Up</>}
            </Button>
          </div>
        </form>
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={!statusErr ? "success" : "error"}
        >
          {status}
        </Alert>
      </Snackbar>
      <Footer />
    </>
  );
}

export default LogInPage;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
