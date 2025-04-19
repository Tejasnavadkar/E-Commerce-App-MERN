import React from 'react'
import NavBar from '../features/NavBar/NavBar'
import AdminProductList from '../features/Admin/components/AdminProductList'

const AdminHomePage = () => {
  return (
    <div>
      <NavBar>
        <AdminProductList/>
      </NavBar>
    </div>
  )
}

export default AdminHomePage
