import './App.css'
import LoginPage from './pages/LoginPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import Home from './pages/HomePage'
import CartPage from './pages/CartPage'
import CheckOutPage from './pages/CheckOutPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Protected from './features/Auth/components/Protected'


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<SignupPage />} />
            
            <Route path='/' element={
              <Protected>
                <Home />
              </Protected>
            }
            />
            <Route path='/login' element={<LoginPage />} />

            <Route path='/cart' element={ 
              <Protected>
                <CartPage />
              </Protected>} />
              
            <Route path='/checkout' element={
              <Protected>
                <CheckOutPage />
              </Protected>
              
              } />
            <Route path='/product-details/:id' element={ 
              <Protected>
                 <ProductDetailsPage/>
              </Protected>
             
            }
               />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
