import React from 'react'
import ButtonAppBar from './NavBar'
import Gallery from './Gallery'
import Footer from './Footer'
import About from './About'
import Goals from './Goals'
import Banner from './Banner'

export default function HomePage(){
    return(
        <div>
            
            <ButtonAppBar/>
            <Banner />
            <About />
            <Goals />
            <Gallery/>
            <Footer/>
        </div>
    );
}