import React, { useState } from 'react'
import { storage, db } from '../Config/Config'
import { NavLink } from 'react-router-dom';

export const AddProducts = () => {

    const [productName, setProductName] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const[productType,setProductType] = useState("Laptop");
    const [error, setError] = useState('');
   

    const types = ['image/png', 'image/jpeg']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    // add product
    const addProduct = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(percentage);

        }, err => setError(err.message)
            , () => {
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    var path = "/Laptop/L";
                    if(productType=="Mobile")
                        path = "/Mobile/M";
                    if(productType =="Audio")
                        path = "/Audio/A";
                    db.collection('Products'+path).add({
                        ProductName: productName,
                        ProductDesc: productDesc,
                        ProductPrice: Number(productPrice),
                        ProductImg: url
                    }).then(() => {
                        setProductName('');
                        setProductDesc('');
                        setProductPrice(0)
                        setProductImg('');
                        setProductType('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
    }

    const changeType= type=>{
        console.log(type);
        setProductType(type);
    }

    return (
        <div className='container m-t-20'>
            <br />
                <h2 className='mtext-105 cl2 mb-3 m-lr-25'>ADD PRODUCTS</h2>
            <hr />
            <form autoComplete="off" className='form-group mt-5 m-lr-25' onSubmit={addProduct}>
                <label htmlFor="product-type">Product Type</label>
                <select onChange={(e)=>changeType(e.target.value)} className="bor8 stext-111 cl2 plh3 size-116 mt-3 mb-3">
                    <option className='cl3' value="Laptop">Laptop</option>
                    <option className='cl3' value="Mobile">Mobile</option>
                    <option  className='cl3' value="Audio">Audio</option>
                </select>
                <br />

                <label htmlFor="product-name" className='mt-4'>Product Name</label>
                <input type="text" className='bor8 stext-111 cl2 plh3 size-116 mb-3' required
                    onChange={(e) => setProductName(e.target.value)} value={productName} />
                <br />

                <label htmlFor="product-name" className='mt-4'>Product Description</label>
                <input type="text" className='bor8 stext-111 cl2 plh3 size-116 mb-3' required
                    onChange={(e) => setProductDesc(e.target.value)} value={productDesc} />
                <br />

                <label htmlFor="product-price">Product Price</label>
                <input type="number" className='bor8 stext-111 cl2 plh3 size-116 mt-3 mb-3' required
                    onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                <br />

                <label htmlFor="product-img">Product Image</label>
                <input type="file" className='bor8 stext-111 cl2 plh3 size-116 mt-3 mb-3' id="file" required
                    onChange={productImgHandler} />
                <br />
                
                <button type="submit" className='flex-c-m stext-101 cl0 size-121 p-lr-50 bg3 bor1 hov-btn3 trans-04 pointer'>ADD</button>
                <br />
                <NavLink to="/" className="pl-2" >
                    Go to Homepage
                </NavLink>
            </form>
            {error && <span className='error-msg'>{error}</span>}
        </div>
        

    )
}


