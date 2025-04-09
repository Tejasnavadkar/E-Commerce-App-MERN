import React from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from '../AuthSlice'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
   const user =  useSelector(userSelector)
   

   if(!user){
    return <Navigate to={'/login'} replace={true} ></Navigate>
   }
  return (
    <div>
       {children}
    </div>
  )
}

export default Protected
