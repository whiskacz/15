import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../styles/Header.css'

import img1 from '../images/nyc1.jpg'
import img2 from '../images/nyc2.jpg'
import img3 from '../images/nyc3.jpg'

const Header = () =>{
    return(
        <>
            
            <Routes>
            <Route path="/" element={<img src={img1} alt="nyc1"/>}/>
            <Route path="/products" element={<img src={img2} alt="nyc2"/>}/>
            <Route path="/contact" element={<img src={img3} alt="nyc3"/>}/>
            <Route path="/admin" element={<img src={img1} alt="nyc1"/>}/>
            <Route element={<img src={img1} alt="nyc1"/>}/>
            </Routes>
           
        </>
    )
}

export default Header