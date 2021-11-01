import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import { Navbar } from './Navbar'
import { Product } from './Product'
import { Footer } from './Footer'
import { RiTruckFill, RiBankCard2Fill, RiRefreshLine } from "react-icons/ri"

export const Home = ({ user }) => {

  return (
  <>

    <Navbar user = {user} />

    <div className="slider">
        <Carousel>
          <Carousel.Item interval={2000}>
            <NavLink to="/laptop">
              <img
              className="d-block w-100"
              src='https://firebasestorage.googleapis.com/v0/b/ecommerce-web-710e1.appspot.com/o/banner-images%2Fbanner-1.png?alt=media&token=4e8ef865-ecc4-49d6-af45-efc0d8a4f4b6'
              alt="First slide"
              height="auto"
              />
            </NavLink>

          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <NavLink to="/audio">
              <img
              className="d-block w-100"
              src='https://firebasestorage.googleapis.com/v0/b/ecommerce-web-710e1.appspot.com/o/banner-images%2Fbanner-2.png?alt=media&token=e58dc44e-6f5a-41e4-b4eb-0b996e8f02f9'
              alt="First slide"
              height="auto"
              />
            </NavLink>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <NavLink to="/mobile">
              <img
              className="d-block w-100"
              src='https://firebasestorage.googleapis.com/v0/b/ecommerce-web-710e1.appspot.com/o/banner-images%2Fbanner-3.png?alt=media&token=99fe111b-4008-4a54-a2e4-e86bf36ff3c6'
              alt="First slide"
              height="auto"
              />
            </NavLink>
          </Carousel.Item>
        </Carousel>
      </div>

    <section className="sec-product bg8 p-t-100">
      <div className="container">
        <div className="p-b-32">
          <div>
            <h3 className="ltext-105 cl5 txt-center respon1">
              Latest Products
            </h3>
          </div>

          <div className="tab-content p-t-50 p-l-60">
            <div className="tab-pane fade show active" role="tabpanel">
              <div className="wrap-slick2">
							  <div className="slick2">

                  <Product user = {user} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="shop-method-area mt-5">
      <div className="container">
        <div className="method-wrapper p-b-50">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-method">
                <i><RiTruckFill /></i>
                <h6>Free Shipping Method</h6>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-method">
                <i><RiBankCard2Fill /></i>
                <h6>Secure Payment System</h6>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-method">
                <i><RiRefreshLine /></i>
                <h6>Easy Returns</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
  )
}
