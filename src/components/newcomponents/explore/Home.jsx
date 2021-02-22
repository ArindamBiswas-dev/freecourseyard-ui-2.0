import React, { useEffect, useState } from 'react'
import MuiAppBar from './appbarComponent/MuiAppBar'
import MainBody from './BodyComponent/MainBody'
import Footer from './footerComponent/Footer'
import useLoadData from './Hooks/useLoadData';

function Home() {

    const [searchInput, setsearchInput] = useState("test");

    const [pageNumber, setPageNumber] = useState(1);


    const getNextPage = (number) => {
        setPageNumber(number);
    }

    const getSearchValue = (value) => {
        value = (value) ? value : "test";
        setsearchInput(value);
    }

    let url = `http://openlibrary.org/search.json?q=${searchInput}&page=${pageNumber}`

    let {courses} = useLoadData(url, searchInput);

    useEffect(() => {
        
    }, [pageNumber, searchInput]);

    return (
        <div>
            <MuiAppBar setSearchValue={getSearchValue}/>
            <MainBody pageTitleName="Let's find" onNextPageReq={getNextPage} courses={courses}/>
            <Footer />
        </div>
    )
}

export default Home
