import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Quantity from '../Quantity/Quantity';


const CartProducts = ({ products, setTotal, setOrderProducts, orderProducts }) => {
    const history = useHistory();
    const handleOrder = () => {
        const number = document.querySelectorAll("#price");
        const quantity = document.querySelectorAll("#quantity");
        let sum = 0;
        number.forEach(element => {
            const table = element.innerHTML;
            const price = (table.split(" ")[1]) * 1;
            sum = sum + price;
            setTotal(sum);
        });

        let cart = [];
        quantity.forEach(element => {
            const table = element.innerHTML;
            const quantity = table * 1;
            cart.push(quantity);
            setOrderProducts({ ...orderProducts, quantity: cart });
        });
        history.push('/order');
    }


    return (
        <div className="table-responsive">
            <h1 className="text-center"> Shopping Cart</h1>
            <table class="container table table-bordered mt-5 mb-5">
                <thead style={{ backgroundColor: "#e0e0e0" }}>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr>
                            <th scope="row"><img style={{ height: '200px', width: "200px", margin: 'auto' }} className="img-fluid" src={`data:image/jpeg;base64,${ product.imgData.img[0] }`} alt="" /></th>
                            <td>{product.name}</td>
                            <td>Tk. {product.price}</td>
                            <Quantity price={product.price}></Quantity>
                        </tr>)
                    }
                    <tr>
                        <td colspan="5" align="right"><button onClick={handleOrder} className="btn btn-success">Checkout Now</button></td>
                    </tr>
                </tbody>
            </table >
        </div>
    );
};

export default CartProducts;