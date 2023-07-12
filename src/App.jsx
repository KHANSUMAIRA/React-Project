import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Page404 from './Pages/Page404'
import Navigationbar from "./components/Navigationbar"
import FooterSection from './components/FooterSection'
import CategoryPage from './Pages/CategoryPage'
// import ProductPage from "../Pages/ProductPage"
import ProductPage from './Pages/ProductPage'
// import Loader from '../components/Loader'
// import {CartContext} from '../context/addtoCart/context'
export default function App() {

  const [user, setUser] = useState(true)
  return (
    <>

      <Navigationbar />

      {
        user

          ?
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductPage/>} />
              {/* <Route path="/products/:productID" element={<ProductPage />} /> */}
              <Route path="/products/:productID" element={<ProductPage />} />
              <Route path="/products/category/:categoryName" element={<CategoryPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          )
          :
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/login" replace={true} />} />
            </Routes>
          )

      }

      <FooterSection />


    </>
  )
}
