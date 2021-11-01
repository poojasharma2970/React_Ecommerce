import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Global/CartContext'
import { Navbar } from './Navbar';
import { Footer  } from './Footer';
import { BsChevronRight } from 'react-icons/bs'
import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'

export const Cart = ({ user }) => {

    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log(user);
            if (!user) {
                history.push('/login');
            }
        })
    },[]);

    return (
        <>
            <Navbar user={user} />

            {/* <!-- breadcrumb --> */}
            <div className="container">
                <div className="bread-crumb flex-w p-l-25 p-tb-50 p-r-15 p-lr-0-lg">
                    <Link to="/" className="stext-109 cl8 hov-cl1 trans-04">
                        Home <BsChevronRight className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"/>
                    </Link>
                    <span className="stext-109 cl4">
                        Shoping Cart
                    </span>
                </div>
            </div>

            <div className='cart-container'>
                {/* {console.log(shoppingCart.length)} */}
                {
                    shoppingCart.length === 0 && <>
                        <div className="p-t-40">No items in your cart</div>
                            <div className="p-b-40"><Link to="/">Return to Home page</Link></div>
                        </>
                }

                {shoppingCart && shoppingCart.map(cart => (
                    <div className='cart-card p-tb-10' key={cart.ProductID}>

                        <div className='cart-img'>
                            <img src={cart.ProductImg} alt="Not found" />
                        </div>

                        <div className='cart-name stext-110 cl2'>{cart.ProductName}</div>

                        <div className='cart-price-orignal stext-110 cl2'>&#8377; {cart.ProductPrice}</div>

                        <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                            <Icon icon={ic_add} size={24} />
                        </div>

                        <div className='quantity stext-110 cl2'>{cart.qty}</div>

                        <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                            <Icon icon={ic_remove} size={24} />
                        </div>

                        <div className='cart-price stext-110 cl2'>
                            &#8377; {cart.TotalProductPrice}
                        </div>

                        <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                            <Icon icon={iosTrashOutline} size={24} />
                        </button>
    

                    </div>
                    ))
                }

                {shoppingCart.length > 0 && <div className='cart-summary mt-5 p-b-50 mb-5'>
                    <div className='cart-summary-heading mtext-109 cl2'>
                        <h2>Cart Total</h2>
                    </div>
                    <div className='cart-summary-price pt-3'>
                        <span className='stext-110 cl2'>Total Qty:</span>
                        <span className='stext-110 cl2'>{totalQty}</span>
                    </div>
                    <div className='cart-summary-price'>
                        <span className='stext-110 cl2'>Total Price:</span>
                        <span className='stext-110 cl2'>&#8377; {totalPrice}</span>
                    </div>
                    <Link to='cashout' className='cashout-link mt-5'>
                        <button className='flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 trans-04 pointer'>
                            Cash on delivery
                        </button>
                    </Link>
                </div>}
            </div>

            <Footer />
        </>
    )
}