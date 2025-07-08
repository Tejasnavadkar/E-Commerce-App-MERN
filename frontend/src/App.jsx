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
import UserProfile from './features/User/components/UserProfile'
import UserOrders from './features/User/components/UserOrders'
import UsersOrdersPage from './pages/UsersOrdersPage'
import UserProfilePage from './pages/UserProfilePage'
import SignOut from './features/Auth/components/SignOut'
import ForgotPassword from './features/Auth/components/ForgotPassword'
import AdminProductDetailsPage from './pages/AdminProductDetailsPage'
import AdminProductListPage from './pages/AdminHomePage'
import AdminProtected from './features/Auth/components/AdminProtected'
import AdminHome from './pages/AdminHomePage'
import AdminHomePage from './pages/AdminHomePage'
import ProductForm from './features/Admin/components/ProductForm'
import AdminProductFormPage from './pages/AdminProductFormPage'
import AdminOrdersPage from './pages/AdminOrdersPage'


function App() {

  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  console.log('user in app.jsx-',user)

  useEffect(() => {
    dispatch(fetchCartsById(user?.id))
  }, [dispatch, user])

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
                <ProductDetailsPage />
              </Protected>
            } />
            <Route path='/order-success/:id' element={
              <OrderSuccessPage />
            } />
            <Route path='/orders' element={
              <Protected>
                <UsersOrdersPage />
              </Protected>
            } />
            <Route path='/profile' element={
              <Protected>
                <UserProfilePage />
              </Protected>
            } />
            <Route path='/signOut' element={
              <Protected>
                <SignOut />
              </Protected>
            } />
            <Route path='/forgot-password' element={
              <ForgotPassword />
            } />

            <Route path='/admin/product-details/:id' element={
              <AdminProtected>
                <AdminProductDetailsPage />
              </AdminProtected>
            } />

            <Route path='/admin' element={
              <AdminProtected>
                <AdminHomePage />
              </AdminProtected>
            } />

            <Route path='/admin/product-form' element={
              <AdminProtected>
                <AdminProductFormPage />
              </AdminProtected>
            } />

            <Route path='/admin/orders' element={
              <AdminProtected>
                <AdminOrdersPage />
              </AdminProtected>
            } />

            <Route path='/admin/product-form/edit/:id' element={
              <AdminProtected>
                <AdminProductFormPage  />
              </AdminProtected>
            } />


            <Route path='*' element={
              <PageNotFound />
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
