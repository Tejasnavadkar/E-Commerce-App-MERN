import React from 'react'
import NavBar from '../features/NavBar/NavBar'
import UserProfile from '../features/User/components/UserProfile'

const UserProfilePage = () => {
  return (
    <div>
      <NavBar>
        <div className='font-bold text-2xl text-gray-800'> My Profile</div>
        <UserProfile/>
      </NavBar>
    </div>
  )
}

export default UserProfilePage
