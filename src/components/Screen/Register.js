import React, { useState }from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink, Link } from 'react-router-dom'
import { RiUserLine } from "react-icons/ri"
import { MdMailOutline, MdLockOutline }  from "react-icons/md"
import { FiPhone }  from "react-icons/fi"
import { auth, db } from '../../Config/Config'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

export const Register = ({submitForm}, props) => {

  // defining state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  // signup
  const signup = (e) => {

      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password).then((cred) => {
          db.collection('SignedUpUsersData').doc(cred.user.uid).set({
              Name: name,
              Email: email,
              Password: password,
              Mobile: mobile
          }).then(() => {
              setName('');
              setEmail('');
              setPassword('');
              setMobile('');
              setError('');
              props.history.push('/');
          }).catch(err => setError(err.message));
      }).catch(err => setError(err.message));
  }

  return (
    <>

      <Navbar />

      {/* Content page */}
      <section className="bg0 p-t-100 p-b-50">
        <div className="container">
          <div className="flex-w flex-tr login">

            <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
              <div className="flex-w w-full p-t-20 p-b-42">
                <div className="size-212 p-t-2 p-b-70">
                  <h4 className="mtext-105 cl2 p-b-5">
                    Welcome!
                  </h4>
                  <span className="mtext-110 cl2">
                    One stop for your electronics
                  </span>
                </div>

                {/* Left Side */}
                <form autoComplete="off" className='form-group' onSubmit={ signup }>
                  <div className="flex-w w-full p-b-40">
                    <div className="bor8 m-b-20 how-pos4-parent name">
                      <i><RiUserLine /></i>
                      <input
                        className="stext-111 cl2 plh3 size-116 p-l-40 p-r-70"
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Your Name"  onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="bor8 m-b-20 how-pos4-parent email">
                      <i>< MdMailOutline /></i>
                      <input className="stext-111 cl2 plh3 size-116 p-l-40 p-r-70"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email Address"
                        required
                      />
                    </div>

                    <div className="bor8 m-b-20 how-pos4-parent password">
                      <i>< MdLockOutline /></i>
                      <input className="stext-111 cl2 plh3 size-116 p-l-40 p-r-70"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Your Password"
                        required
                      />

                    </div>

                    <div className="bor8 m-b-20 how-pos4-parent mobile">
                      <i>< FiPhone /></i>
                      <input className="stext-111 cl2 plh3 size-116 p-l-40 p-r-70"
                        type="tel"
                        name="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Your Mobile Number"
                        required
                      />


                    </div>

                  </div>

                    <button type="submit" className="flex-c-m stext-101 cl0 size-121 p-lr-50 bg3 bor1 hov-btn3 trans-04 pointer">
                      Sign Up
                    </button>

      
      
      
                </form>

                {/* {error && <span className='error-msg'>{error}</span>} */}

              </div>
            </div>

            {/* Right Side */}
            <div className="size-210 bor10 p-t-55 p-b-70 w-full-md">
              <div className="signup-img flex-w w-full p-b-30 justify-content-center mt-4">
                <img src='https://firebasestorage.googleapis.com/v0/b/ecommerce-web-710e1.appspot.com/o/error-auth-images%2Fsignup.svg?alt=media&token=0e454568-3078-4287-9be3-379b90665e96' alt="Sign Up" />
              </div>

              <div className="flex-w w-full size-212 p-t-2 ml-4 justify-content-center">
                <p className="stext-115 cl6 size-220 p-t-10">
                  Already have an account?
                  <NavLink to="/login" className="pl-1" >
                    Log In
                  </NavLink>
                </p>
              </div>              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
