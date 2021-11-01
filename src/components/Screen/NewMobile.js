import React, {useState,useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'
import image1 from '../../assets/images/mobile-page/c1.png'
import image2 from '../../assets/images/mobile-page/c2.png'
import { NavLink } from 'react-router-dom'
import { BsChevronRight } from 'react-icons/bs'
import { Navbar } from '../Navbar'
import { Product } from '../Product'
import { Footer } from '../Footer'

import { CartContext } from '../../Global/CartContext'
import { ProductsContext } from '../../Global/ProductsContext'

export const NewMobile= ({user}) => {
    const { products } = useContext(ProductsContext);
    
    const { dispatch } = useContext(CartContext);
    const [productCopy,setProductCopy] = useState([]);


    const onHighToLowClick = ()=>{
        console.log(products);
        var filtered = products.sort((a,b)=>a.ProductPrice<b.ProductPrice ? 1 : -1);
        console.log(filtered)
        setProductCopy(filtered)
    }
  return (
    <>

      <Navbar user={user} />

      {/* <!-- breadcrumb --> */}
      <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <NavLink to="/" className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <BsChevronRight className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"/>
          </NavLink>
          <span className="stext-109 cl4">
            Mobiles
          </span>
        </div>
      </div>

      {/* Side Bar */}
      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 pr-3">
              <div className="shop__sidebar">
                  <div className="shop__sidebar__accordion m-t-50 m-b-35">
                    <div className="accordion" id="accordionExample">

                      {/* Brands */}
                      <div className="card">
                        <div className="card-heading">
                          <p>Brands</p>
                        </div>
                        <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="shop__sidebar__brand">
                              <ul>
                                <li><a href="/">Samsung</a></li>
                                <li><a href="/">Mi</a></li>
                                <li><a href="/">Oppo</a></li>
                                <li><a href="/">Vivo</a></li>
                                <li><a href="/">Realme</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="card">
                        <div className="card-heading">
                          <p>Price</p>
                        </div>
                        <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="shop__sidebar__price">
                              <ul>
                                <li><a href="/">Under &#8377;1,000</a></li>
                                <li><a href="/">&#8377;1,000 – &#8377;5,000</a></li>
                                <li><a href="/">&#8377;5,000 – &#8377;10,000</a></li>
                                <li><a href="/">&#8377;10,000 – &#8377;20,000</a></li>
                                <li><a href="/">Over &#8377;20,000</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*Ram Size*/}
                      <div className="card">
                        <div className="card-heading">
                          <p>RAM Size</p>
                        </div>
                        <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="shop__sidebar__cpu">
                              <ul>
                                <li><a href="/">6GB & Above</a></li>
                                <li><a href="/">4GB</a></li>
                                <li><a href="/">2GB</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Storage Type */}
                      <div className="card">
                        <div className="card-heading">
                          <p>Storage</p>
                        </div>
                        <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="shop__sidebar__storage">
                              <ul>
                                <li><a href="/">256GB & Above</a></li>
                                <li><a href="/">128GB - 256GB</a></li>
                                <li><a href="/">64GB - 128GB</a></li>
                                <li><a href="/">32GB - 64GB</a></li>
                                <li><a href="/">16GB - 32GB</a></li>
                                <li><a href="/">8GB - 16GB</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="col-lg-10">

                {/* Slider */}
                <div className="mobile slider pointer m-t-50 m-lr-4">
                  <Carousel>
                    <Carousel.Item interval={3000}>
                      <NavLink to="/mobile">
                        <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        height="300"
                        />
                      </NavLink>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                      <NavLink to="/mobile">
                        <img
                        className="d-block w-100"
                        src={image2}
                        alt="First slide"
                        height="300"
                        />
                      </NavLink>
                    </Carousel.Item>
                  </Carousel>
                </div>


                {/* Showing options */}
                <div className="shop__product__option m-t-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="shop__product__option__left m-b-35">
                        <p>Showing 1–6 of 20 results</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="shop__product__option__right m-b-35">
                        <p>Sort by</p>
                        <select className="p-l-10" onChange={()=>onHighToLowClick()}>
                          <option value="">Featured</option>
                          <option value="">Best Selling</option>
                          <option value="">Price - Low to High</option>
                          <option value="">Price - High to Low</option>
                          <option value="">Discount - Low to High</option>
                          <option value="">Discount - High to Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <Product array={productCopy} />
                {/* {
                    product.map(products=>{
                        return(
                            <>
            <div className='products-container'>
                {products.length === 0 && <div>Slow internet...</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="Not found" />
                        </div>
                        <div className='product-name stext-104 cl4 hov-cl1 mt-3 trans-04 p-b-6'>
                            {product.ProductName}
                        </div>
                        <div className='product-price stext-105 cl3 '>
                            &#8377; {product.ProductPrice}
                        </div>
                        <button className='addcart-btn flex-c-m stext-101 cl0 mt-3 m-l-70 size-116 bg3 bor14 hov-btn3 trans-04 pointer' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
                        )
                    })
                } */}

              </div>
            </div>
          </div>
      </section>

      <Footer />
    </>
  )
}

