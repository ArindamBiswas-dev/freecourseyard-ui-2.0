import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../../App";
import MuiAppBar from "./appbarComponent/MuiAppBar";
import MainBody from "./BodyComponent/MainBody";
import Footer from "./footerComponent/Footer";

function FavoriteCourses() {
  const user = useContext(UserContext);
  const [courses, setCourses] = useState([]);
  
  const url = `https://freecourseyard-backend.glitch.me/favorites?token=${user.token}`;

  useEffect(() => {
    trackPromise(
        axios.get(url)
        .then(res =>{
            setCourses(res.data.data);
        })
        .catch(error => {
            console.log(error.message);
        })
    );
    
  }, [url]);

  return (
    <div>
      <MuiAppBar isHide={true} />
      <MainBody
        pageTitleName="Your Favorite Courses"
        courses={courses}
        hideShowMore={true}
      />
      <Footer />
    </div>
  );
}

export default FavoriteCourses;
