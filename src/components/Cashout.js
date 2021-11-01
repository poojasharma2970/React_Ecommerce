import React, { useState, useEffect, useContext } from 'react'
import { auth, db } from '../Config/Config'
import { CartContext } from '../Global/CartContext'
import { Link } from 'react-router-dom'
import { BsChevronRight } from 'react-icons/bs'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useHistory } from 'react-router-dom'

export const Cashout = (props) => {

    const history = useHistory();

    const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).onSnapshot(snapshot => {
                    setName(snapshot.data().Name);
                    setEmail(snapshot.data().Email);
                })
            }
            else {
                history.push('/login')
            }
        })
    })

    const cashoutSubmit = (e) => {
        e.preventDefault();
        auth.onAuthStateChanged(user => {
            if (user) {
                const date = new Date();
                const time = date.getTime();
                db.collection('Buyer-info ' + user.uid).doc('_' + time).set({
                    BuyerName: name,
                    BuyerEmail: email,
                    BuyerCell: cell,
                    BuyerAddress: address,
                    BuyerPayment: totalPrice,
                    BuyerQuantity: totalQty
                }).then(() => {
                    setCell('');
                    setAddress('');
                    dispatch({ type: 'EMPTY' })
                    setSuccessMsg('Your order has been placed successfully. Thanks for visiting us. You will be redirected to home page after few seconds');
                    setTimeout(() => {
                        history.push('/')
                    }, 5000)
                }).catch(err => setError(err.message))
            }
        })
    }

    return (
        <>
            <Navbar user={props.user} />

            {/* <!-- breadcrumb --> */}
            <div className="container">
                <div className="bread-crumb flex-w p-l-25 p-tb-50 p-r-15 p-lr-0-lg">
                    <Link to="/" className="stext-109 cl8 hov-cl1 trans-04">
                        Home <BsChevronRight className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"/>
                    </Link>
                    <Link to="/cart" className="stext-109 cl8 hov-cl1 trans-04">
                        Shopping Cart <BsChevronRight className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"/>
                    </Link>
                    <span className="stext-109 cl4">
                        Checkout
                    </span>
                </div>
            </div>

            <div className='container m-b-100'>
                <br />
                    <h2 className='mtext-105 cl2 mb-3 m-lr-25'>Checkout Details</h2>
                <br />

                {successMsg && <div className='success-msg m-b-10 m-lr-25'>{successMsg}
                </div>}

                <form autoComplete="off" className='form-group m-lr-25' onSubmit={cashoutSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" className='bor8 stext-111 cl2 plh3 size-116 p-l-40 p-r-70 mt-2 mb-3' required
                        value={name} disabled />
                    <br />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" className='bor8 stext-111 cl2 plh3 size-116 p-l-40 p-r-70 mt-2 mb-3' required
                        value={email} disabled />
                    <br />

                    <label htmlFor="mobile">Your Mobile Number</label>
                    <input type="number" className='bor8 stext-111 cl2 plh3 size-116 p-l-40 p-r-70 mt-2 mb-3' required
                        onChange={(e) => setCell(e.target.value)} value={cell} placeholder='eg. 9823450218' />
                    <br />

                    <label htmlFor="Delivery Address">Your Address</label>
                    <input type="text" className='bor8 stext-111 cl2 plh3 size-116 p-l-40 p-r-70 mt-2 mb-3' required
                        onChange={(e) => setAddress(e.target.value)} value={address} placeholder='eg. Rose Villa, Bakers St., Mumbai - 400091'/>
                    <br />

                    <label htmlFor="Price To Pay">Price To Pay</label>
                    <input type="number" className='bor8 stext-111 cl2 plh3 size-116 p-l-40 p-r-70 mt-2 mb-3' required
                        value={totalPrice} disabled />
                    <br />

                    <label htmlFor="Total No of Products">Total Products</label>
                    <input type="number" className='bor8 stext-111 cl2 plh3 size-116 p-l-40 p-r-70 mt-2 mb-3' required
                        value={totalQty} disabled />
                    <br />
                    
                    <button type="submit" className='flex-c-m stext-101 cl0 size-121 p-lr-50 bg3 mt-3 bor1 hov-btn3 trans-04 pointer'>SUBMIT</button>
                </form>
                {error && <span className='error-msg'>{error}</span>}
            </div>

            <Footer />
        </>
    )
}