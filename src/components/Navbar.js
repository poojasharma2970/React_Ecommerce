import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink, Link } from 'react-router-dom'
import { RiShoppingCartLine, RiSearchLine, RiUserLine } from "react-icons/ri"
import { MdFavoriteBorder } from 'react-icons/md'
import { useHistory } from 'react-router'
import { auth } from '../Config/Config'
import { CartContext } from '../Global/CartContext'


export const Navbar = ({ user }) => {

  const history = useHistory();
  const { totalQty } = useContext(CartContext);

  // handle logout
  const handleLogout = () => {
      auth.signOut().then(() => {
          history.push('/login');
      })
  }

  return (
    <>

      {/* Header */}
      <div className="header-v2">

        {/* Header desktop */}
        <div className="container-menu-desktop trans-03">
          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop p-l-45">

              {/* Logo desktop */}
              <NavLink to="/">
                <h2 className="text-uppercase mt-3 mr-3">Avalen</h2>
              </NavLink>

              {/* Menu desktop */}
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li><NavLink to="/laptop">Laptops</NavLink></li>
                  <li><NavLink to="/mobile">Mobiles</NavLink></li>
                  <li><NavLink to="/audio">Audio</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                </ul>
              </div>

              {/* Icon header */}
              <div className="wrap-icon-header flex-w flex-r-m h-full">
                {/* Search */}
                <div className="search-area bor5">
                  <form action="#" method="post">
                      <input className="m-l-5" type="search" name="search" id="headerSearch" placeholder="Search for more" autoComplete="off"/>
                      <button type="submit" onClick="">
                        <RiSearchLine />
                      </button>
                  </form>
                </div>

                {/* Account */}
                {!user && <div className="flex-c-m h-full p-l-25 p-r-75">
                  <NavLink to="/login">
                    <button type="button" className="btn p-0" data-toggle="dropdown">
                      <RiUserLine/>
                    </button>
                  </NavLink>
                </div>}

                {/* After Login */}
                {user && <div className="user flex-c-m h-full pt-3 p-lr-25">
                  <p>{user}</p>
                </div>}

                {/* Wishlist */}
                {user && <div className="flex-c-m h-full p-r-25">
                  <div className="icon-header-item cl2 hov-cl1 trans-04">
                    <NavLink to="/wishlist">
                      <button type="button" className="btn p-0">
                        <MdFavoriteBorder />
                      </button>
                    </NavLink>
                  </div>
                </div>}

                {/* Shopping Cart */}
                {user && <div className="flex-c-m h-full p-lr-25">
                  <div className="icon-header-item cl2 hov-cl1 trans-04">
                    <NavLink to="/cart">
                      <button type="button" className="btn p-0">
                        <RiShoppingCartLine />
                      </button>
                    </NavLink>
                  </div>
                </div>}

                {/* Logout */}
                {user && <div className="logout flex-c-m h-full p-l-70 p-r-100">
                  <button  type="button" className='flex-c-m stext-101 cl0 size-121 p-lr-15 bg3 bor1 hov-btn3 trans-04 pointer' onClick={handleLogout}>
                    Logout
                  </button>
                </div>}

              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
