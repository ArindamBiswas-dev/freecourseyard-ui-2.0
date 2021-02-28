import React, { useEffect, useState } from "react";
import MuiAppBar from "./appbarComponent/MuiAppBar";
import MainBody from "./BodyComponent/MainBody";
import Footer from "./footerComponent/Footer";
import useLoadData from "./Hooks/useLoadData";

function Home() {
  const [searchInput, setsearchInput] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const getNextPage = (number) => {
    setPageNumber(number);
  };

  const getSearchValue = (value) => {
    value = value ? value : "";
    setsearchInput(value);
  };

  let url = (!searchInput)
    ? `https://freecourseyard-backend.glitch.me/?page=${pageNumber}`
    : `https://freecourseyard-backend.glitch.me/search/${searchInput}?page=${pageNumber}`;

  let { courses } = useLoadData(url, searchInput);

  useEffect(() => {
    // console.log(localStorage)
    // console.log(searchInput)
  }, [pageNumber]);

  useEffect(() => {
    setPageNumber(0);
  }, [searchInput]);

  return (
    <div>
      <MuiAppBar setSearchValue={getSearchValue} />
      <MainBody
        pageTitleName="Let's find"
        onNextPageReq={getNextPage}
        courses={courses}
        pageNumber={pageNumber}
      />
      <Footer />
    </div>
  );
}

export default Home;
