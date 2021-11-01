import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa"
import { MdFavoriteBorder } from "react-icons/md"

export const Footer = () => {
  return (
    <>
      <footer className="bg3 mt-5 p-t-75 p-b-30">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30 m-l-30">
                Categories
              </h4>

              <ul>
                <li>
                  <NavLink to="/laptop">
                    <p className="stext-107 cl7 hov-cl1 trans-04">Laptops</p>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/mobile">
                    <p className="stext-107 cl7 hov-cl1 trans-04">Mobiles</p>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/audio">
                    <p className="stext-107 cl7 hov-cl1 trans-04">Audio</p>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30 m-l-30">
                Help
              </h4>

              <ul>
                <li>
                  <NavLink to="/">
                    <p className="stext-107 cl7 hov-cl1 trans-04">Track Order</p>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/">
                    <p className="stext-107 cl7 hov-cl1 trans-04">Returns</p>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/">
                    <p className="stext-107 cl7 hov-cl1 trans-04">Shipping</p>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">
                GET IN TOUCH
              </h4>

              <p className="stext-107 cl7 size-201">
                Any questions? Call us on<br />(+91) 94086 61533
              </p>

              <div className="p-t-15">
                <NavLink to="/" className="fs-18 cl7 hov-cl1 trans-04 m-r-14">
                  <FaFacebookF />
                </NavLink>

                <NavLink to="/" className="fs-18 cl7 hov-cl1 trans-04 m-r-14">
                  <FaInstagram />
                </NavLink>

                <NavLink to="/" className="fs-18 cl7 hov-cl1 trans-04 m-r-14">
                  <FaWhatsapp />
                </NavLink>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">
                Newsletter
              </h4>

              <form>
                <div className="wrap-input1 w-full p-b-4">
                  <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="email@example.com" autoComplete="off" required/>
                  <div className="focus-input1 trans-04"></div>
                </div>

                <div className="p-t-18">
                  <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <p className="stext-107 cl6 txt-center">
              Copyright &copy; 2021 | All rights reserved | Made with < MdFavoriteBorder /> by Avalen
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
