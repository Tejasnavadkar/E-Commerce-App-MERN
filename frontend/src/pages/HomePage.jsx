import React from 'react'
import NavBar from '../features/NavBar/NavBar'
import ProductList from '../features/Product-List/components/ProductList'
import Footer from '../features/Common/Footer'

const Home = () => {
  return (
    <div>
        <NavBar>
            <ProductList/>
        </NavBar>
        <Footer/>
    </div>
  )
}

export default Home
