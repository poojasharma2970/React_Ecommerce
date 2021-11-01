import React, { useContext, useEffect, useState } from 'react'
import { db,auth } from '../Config/Config';
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import { useHistory } from 'react-router-dom'

export const Product = (props, {user}) => {

    const { products } = useContext(ProductsContext);
    const { dispatch } = useContext(CartContext);
    // const [products,setProducts] = useState([]);

    const history = useHistory();
    const checkLogin = (product) => {
      console.log("Login handler called")
      auth.onAuthStateChanged ( user => {
        console.log(user);
        if (!user) {
            history.push('/login');
        } else {
          dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product });
        }
    })
    }

    return (
        <>
            <div className='products-container'>
                {products.length === 0 && <div>Slow internet...</div>}
                {products.map(product => (
                    <div className='product-card bg0' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="Not found" />
                        </div>
                        <div className='product-name stext-104 cl5 hov-cl1 mt-3 trans-04 p-b-6'>
                            {product.ProductName}
                        </div>
                        <div className='product-price stext-105 cl3 pb-3'>
                            {product.ProductDesc}
                        </div>
                        <div className='product-price stext-101 cl4'> 
                            &#8377; {product.ProductPrice}
                        </div>
                        <button className='addcart-btn flex-c-m stext-101 cl0 mt-3 m-l-70 size-116 bg3 bor14 hov-btn3 trans-04 pointer' 
                            onClick={() => checkLogin(product)}>
                            ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
}