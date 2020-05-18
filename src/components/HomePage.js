import React from 'react'
import ButtonAppBar from './NavBar'
import Gallery from './Gallery'
import Footer from './Footer'

export default function HomePage(){
    return(
        <div>
            
            <ButtonAppBar/>
            <Gallery/>
            <Footer/>
        </div>
    );
}