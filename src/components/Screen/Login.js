import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import { MdMailOutline, MdLockOutline }  from "react-icons/md"
import { auth } from '../../Config/Config'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

export const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = (e) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, password).then(() => {
          setEmail('');
          setPassword('');
          setError('');
          props.history.push('/');
      }).catch(err => setError(err.message));
  }

  return (
    <>

      <Navbar />

      {/* Content page */}
      <section className="bg0 p-t-100 p-b-50">
        <div className="container">
          <div className="flex-w flex-tr login">

            {/* Left Side */}
            <div className="size-210 bor10 p-t-55 p-b-70 w-full-md">
              <div className="login-img flex-w w-full p-b-40 justify-content-center">
                <img src='https://firebasestorage.googleapis.com/v0/b/ecommerce-web-710e1.appspot.com/o/error-auth-images%2Flogin.svg?alt=media&token=a926cc14-8cc9-4411-ae4f-cddc671ff11f' alt="Log In"/>
              </div>

              <div className="flex-w w-full size-212 p-t-2 ml-4 justify-content-center">
                <p className="stext-115 cl6 size-220 p-t-10">
                  New to Our Store? <span className='mr-4'/>
                  <NavLink to="/signup" className="pl-2" >
                    Create Account
                  </NavLink>
                </p>
              </div>

              <div className="flex-w w-full size-212 ml-4 justify-content-center">
                <p className="stext-115 cl6 size-220">
                  Are you a seller? <span className='mr-4'/>
                  <NavLink to="/addproducts" className="pl-2" >
                    Add Products
                  </NavLink>
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
              <div className="flex-w w-full p-b-42">
                <div className="size-212 p-t-2 p-b-70">
                  <h4 className="mtext-105 cl2 p-b-5">
                    Howdy there!
                  </h4>
                  <span className="mtext-110 cl2">
                    Please Sign In to access your account
                  </span>
                </div>

                <form autoComplete="off" className='form-group' onSubmit={ login }>
                  <div className="flex-w w-full p-b-30">
                    <div className="bor8 m-b-20 how-pos4-parent">
                      <i><MdMailOutline /></i>
                      <input className="stext-111 cl2 plh3 size-116 p-l-40 p-r-70" type="email" name="email" placeholder="Your Email Address" autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={ email } required/>
                    </div>

                    <div className="bor8 how-pos4-parent">
                      <i><MdLockOutline /></i>
                      <input className="stext-111 cl2 plh3 size-116 p-l-40 p-r-70" type="password" name="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                    </div>
                  </div>

                  <button type="submit" className="flex-c-m stext-101 cl0 size-121 m-t-70 p-lr-50 bg3 bor1 hov-btn3 trans-04 pointer">
                      Log In
                  </button>
                </form>

                {error && <span className='error-msg'>{error}</span>}

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}
