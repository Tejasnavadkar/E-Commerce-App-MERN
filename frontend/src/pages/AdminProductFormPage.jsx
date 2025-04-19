import React from 'react'
import ProductForm from '../features/Admin/components/ProductForm'
import NavBar from '../features/NavBar/NavBar'

const AdminProductFormPage = () => {
    return (
        <div>
            <NavBar>
                <ProductForm />
            </NavBar>
        </div>
    )
}

export default AdminProductFormPage
