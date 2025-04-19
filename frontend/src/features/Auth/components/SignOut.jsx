import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignOutUserAsync, userSelector } from '../AuthSlice'
import { Navigate } from 'react-router-dom'

const SignOut = () => {

    const dispatch = useDispatch()
    const loggedInUser = useSelector(userSelector)
    useEffect(()=>{
        dispatch(SignOutUserAsync())
    },[])
  return (
    <div>
        {!loggedInUser && <Navigate to={'/login'} replace={true} />}
      Signout
    </div>
  )
}

export default SignOut
