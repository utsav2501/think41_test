import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import DepartmentList from './components/DepartmentList.jsx'
import DepartmentPage from './components/DepartmentPage.jsx'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/department" element={<DepartmentList />} />
          <Route path="/department/:id" element={<DepartmentPage />} />
         
        </Routes>
      </Router>
      
    </>
  )
}

export default App
