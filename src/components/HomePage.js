import React from 'react'
import ButtonAppBar from './NavBar'
import Gallery from './Gallery'
import Footer from './Footer'
import About from './About'
import Goals from './Goals'

export default function HomePage(){
    return(
        <div>
            
            <ButtonAppBar/>
            <About />
            <Goals />
            <Gallery/>
            <Footer/>
        </div>
    );
}