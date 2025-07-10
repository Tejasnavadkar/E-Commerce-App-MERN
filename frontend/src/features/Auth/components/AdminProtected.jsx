import React from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from '../AuthSlice'
import { Navigate } from 'react-router-dom'

const AdminProtected = ({children}) => {

    const loggedInUser = useSelector(userSelector)
    console.log('loged',loggedInUser)

    if(!loggedInUser){
        return <Navigate to={'/login'} />
    }

    if(loggedInUser.role !== 'admin'){
        return <Navigate to={'/'} />
    }

    return (
        <>
            {children}
        </>
    )
}

export default AdminProtected
