import React from 'react'
import Home from './components/Home';
// import Navbar from './components/Navbar'
// import Body from './components/Body'
// import Body2 from './components/Body2'
import Vendor from './components/Vendor'
// import Footer from './components/Footer'
import  { Routes, Route, } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/vendor" element={<Vendor/>}/>
  </Routes>
  )
}

export default App

