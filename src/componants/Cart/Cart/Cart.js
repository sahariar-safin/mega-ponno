import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route } from 'react-router';
import { CartContext } from '../../../App';
import Footer from '../../Sheared/Footer/Footer';
import Navbar from '../../Sheared/Navbar/Navbar';
import CartProducts from '../CartProducts/CartProducts';
import Order from '../Order/Order';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [orderProducts, setOrderProducts] = useState({
        product: cart
    });

    useEffect(() => {
        axios.post('https://frozen-fjord-85553.herokuapp.com/cartProducts', cart)
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

            <Route path="/cart">
                <CartProducts orderProducts={orderProducts} setOrderProducts={setOrderProducts} setTotal={setTotal} products={cartProducts}></CartProducts>
            </Route>
            <Route path="/order">
                <Order orderProducts={orderProducts} total={total}></Order>
            </Route>

            <Footer></Footer>
        </div>
    );
};

export default Cart;