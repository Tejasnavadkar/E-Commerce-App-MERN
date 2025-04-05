import './App.css'
import LoginPage from './pages/LoginPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import Home from './pages/HomePage'
import CartPage from './pages/CartPage'
import CheckOutPage from './pages/CheckOutPage'
import ProductDetailsPage from './pages/ProductDetailsPage'


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/checkout' element={<CheckOutPage/>}/>
            <Route path='/product-details' element={<ProductDetailsPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
