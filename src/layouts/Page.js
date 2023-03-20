import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AdminPage from '../pages/AdminPage'
import ProductListPage from '../pages/ProductListPage'
import ContactPage from '../pages/ContactPage'
import ErrorPage from '../pages/ErrorPage'
import ProductPage from '../pages/ProductPage'


const Page = () =>{
    return(
        <>
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductListPage/>} />
        <Route path='/product/:id' element={<ProductPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='/' element={<ErrorPage/>} />
        </Routes>
        </>
    )
}

export default Page