import { useState } from 'react'

import './App.css'
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';

import men_banner from './assets/banner1.jpg'
import women_banner from './assets/banner2.jpg'
import kid_banner from './assets/banner3.jpg'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            {/* <Route path="/" element={<Shop />} /> */}
            <Route path='/' element={<Shop/>} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path="/product" element={<Product />} />
        
            <Route path="/product/:productId" element={<Product />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
