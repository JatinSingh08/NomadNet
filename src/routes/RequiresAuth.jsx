import React from 'react'
import { SharedLayout } from '../components'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authSelector } from '../features/authSlice'

const RequiresAuth = () => {
  const { encodedToken } = useSelector(authSelector);
  return (
    <>
    {
      encodedToken ? (
        <SharedLayout>
          <Outlet />
        </SharedLayout>
      ) : (
        <Navigate to="/login" />
      )
    }
    </>
  )
}

export default RequiresAuth
