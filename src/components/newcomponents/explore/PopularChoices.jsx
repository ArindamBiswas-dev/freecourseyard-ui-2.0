import React from 'react'
import MuiAppBar from './appbarComponent/MuiAppBar'
import MainBody from './BodyComponent/MainBody'
import Footer from './footerComponent/Footer'

function PopularChoices() {
    return (
        <div>
            <MuiAppBar />
            <MainBody pageTitleName="Popular Choices"/>
            <Footer />
        </div>
    )
}

export default PopularChoices
