import React from 'react'
import ProductDetails from '../features/Product-List/components/ProductDetails'
import NavBar from '../features/NavBar/NavBar'
import Footer from '../features/Common/Footer'

const ProductDetailsPage = () => {
  return (
    <div>
      <NavBar>
      <ProductDetails/>
      </NavBar>
      <Footer/>
    </div>
  )
}

export default ProductDetailsPage
