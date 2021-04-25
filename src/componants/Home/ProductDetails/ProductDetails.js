import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from '../../../App';
import FlashSell from '../../Home/FlashSell/FlashSell';
import './ProductDetails.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ProductDetails = ({ product }) => {
    console.log(product);
    const [cart, setCart] = useContext(CartContext);
    const history = useHistory();
    const handleAddCart = (id) => {
        if (cart.find(element => element === id)) {
            alert("This item already added in your cart!")
        } else {
            const newCart = [...cart];
            newCart.push(id)
            setCart(newCart)
            history.push("/cart");
        }
    }
    const handleOrderNow = (id) => {
        if (cart.find(element => element === id)) {
            alert("This item already added in your cart!")
        } else {
            const newCart = [...cart];
            newCart.push(id)
            setCart(newCart)
            history.push('/cart')
        }
    }
    return (
        <div className="container">
            <div style={{ height: "550px", marginTop: "25px" }} className="row align-items-center productDetails">
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <Carousel>
                        {
                            product.imgData.img.map(img =>
                                <div>
                                    <img className="img-fluid" src={`data:image/jpeg;base64,${ img }`} alt="" />
                                </div>)
                        }
                    </Carousel>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <h3>{product.name}</h3>
                    <h6 style={{ margin: "20px 0px" }}>Product Code: <strong>{product.productID}</strong></h6>
                    <h2>  {product.originalPrice > 0 && <small><s>Tk. {product.originalPrice}</s></small>} <strong>Tk. {product.price}</strong></h2>
                    <div className="d-flex flex-wrap justify-content-start mb-5">
                        <button onClick={() => handleAddCart(`${ product.productID }`)} className="btn btn-primary">Add to cart</button>
                        <button onClick={() => handleOrderNow(`${ product.productID }`)} className="btn btn-warning ms-3">Order now</button>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <div style={{
                        marginBottom: "20px", color: "#0c5460", backgroundColor: "#d1ecf1", borderColor: "#bee5eb"
                    }} className="card text-center p-2">
                        <p><strong>Delivery Charge</strong></p>
                        <p>Inside Dhaka - 60 Taka</p>
                        <p>Outside Dhaka - 120 Taka.</p>
                    </div>
                    <div style={{
                        color: "#0c5460", backgroundColor: "#d1ecf1", borderColor: "#bee5eb"
                    }} className="card text-center p-2">
                        <p><strong>ঢাকার বাহিরে কুরিয়ারে</strong></p>
                        <p>ডেলিভারি- ১২০ টাকা, হোম ডেলিভারি- ১৫০ টাকা অগ্রীম পেমেন্ট করতে হবে।</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <p><strong>Description</strong></p>
                <p>{product.description}</p>
            </div>
        </div >
    );
};

export default ProductDetails;