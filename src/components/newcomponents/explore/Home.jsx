import React, { useState } from 'react'
import MuiAppBar from './appbarComponent/MuiAppBar'
import MainBody from './BodyComponent/MainBody'
import Footer from './footerComponent/Footer'
import LodingIndecator from './LodingIndecator';

function Home() {

    const [searchInput, setsearchInput] = useState("");

    function onChangeHandelar(input) {
        setsearchInput(input);
        // console.log(`In the Home: ${input}`);
    }

    return (
        <div>
            <MuiAppBar onChange={onChangeHandelar}/>
            
            <MainBody pageTitleName="Let's find" searchValue={searchInput}/>
            <Footer />
        </div>
    )
}

export default Home
