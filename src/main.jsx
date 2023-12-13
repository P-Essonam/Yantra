import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Menu from './Menu.jsx'
import About from './About.jsx'
import ContactUs from './ContactUs.jsx'
import EVouchers from './EVouchers.jsx'
import Press from './Press.jsx'
import Reservations from './Reservations.jsx'
import Sweets from './Sweets.jsx'
import TheGrandTruck from './TheGrandTruck.jsx'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import HomeLayout from './Layouts/HomeLayout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<App/>} />
        <Route path='/about-us' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Press' element={<Press />} />
        <Route path='/Reservations' element={<Reservations />} />
        <Route path='/TheGrandTruck' element={<TheGrandTruck />} />
        <Route path='/e-Vouchers' element={<EVouchers />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Sweets' element={<Sweets />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
