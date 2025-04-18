import React from 'react'
import NavBar from '../features/NavBar/NavBar'
import UserOrders from '../features/User/components/UserOrders'

const UsersOrdersPage = () => {
  return (
    <div>
      <NavBar>
        <UserOrders/>
      </NavBar>
    </div>
  )
}

export default UsersOrdersPage
