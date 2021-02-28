import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { UserContext, SetUserContext } from "../../../App";

function LogOut() {
  const user = useContext(UserContext);
  const setUser = useContext(SetUserContext);
  if (user.token) {
    localStorage.removeItem("token");
  }
  useEffect(() => {
    setUser({});
  }, []);
  return <Redirect to="/" />;
}

export default LogOut;
