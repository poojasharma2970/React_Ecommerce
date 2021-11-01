import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="not-found">
      <img src='https://firebasestorage.googleapis.com/v0/b/ecommerce-web-710e1.appspot.com/o/error-auth-images%2Ferror.svg?alt=media&token=76d6b152-2bae-4698-bdb5-05017c46d44e' alt="error"/>
      <div className="flex-w w-full size-212 p-t-2 ml-4 justify-content-center">
        <p className="stext-101 cl6 size-220 p-t-5">
          Oops! Page Not Found
        </p>
      </div>
      <div className="flex-w w-full size-212 ml-4 justify-content-center">
        <NavLink to="/" className="pl-1" >
          Go to Homepage
        </NavLink>
      </div>
    </div>
  )
}