import React from 'react'
import NavBar from '../features/NavBar/NavBar'
import ProductList from '../features/Product-List/ProductList'

const Home = () => {
  return (
    <div>
        <NavBar>
            <ProductList/>
        </NavBar>
    </div>
  )
}

export default Home
