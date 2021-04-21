import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CartContext } from '../../../App';
import Footer from '../../Sheared/Footer/Footer';
import Navbar from '../../Sheared/Navbar/Navbar';
import CartProducts from '../CartProducts/CartProducts';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:5000/cartProducts', cart)
            .then(function (response) {
                const data = response.data;
                setCartProducts(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center"> Shopping Cart</h1>
            <CartProducts products={cartProducts}></CartProducts>
            <Footer></Footer>
        </div>
    );
};

export default Cart;