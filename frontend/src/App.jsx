import './App.css'
import LoginPage from './pages/LoginPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import Home from './pages/HomePage'
import CartPage from './pages/CartPage'
import CheckOutPage from './pages/CheckOutPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Protected from './features/Auth/components/Protected'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from './features/Auth/AuthSlice'
import { fetchCartsById } from './features/Cart/CartSlice'
import PageNotFound from './pages/PageNotFound'
import OrderSuccessPage from './pages/OrderSuccessPage'


function App() {

 const dispatch = useDispatch()
 const user = useSelector(userSelector)

  useEffect(()=>{
    dispatch(fetchCartsById(user?.id))
  },[dispatch,user])

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
             
            }/>
            <Route path='/order-success/:id' element={ 
              
                 <OrderSuccessPage/>
            
             
            }/>
             <Route path='*' element={ 
                 <PageNotFound/>
            }/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
