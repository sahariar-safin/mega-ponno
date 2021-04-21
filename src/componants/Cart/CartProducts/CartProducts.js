import React from 'react';
import { useState } from 'react';
import Quantity from '../Quantity/Quantity';


const CartProducts = ({ products }) => {
    const [total, setTotal] = useState(0);

    const handleOrder = () => {
        const number = document.querySelectorAll("#price");
        number.forEach(element => {
            const table = element.innerHTML;
            const price = (table.split(" ")[1]) * 1;
            const newTotal = total + price;
            setTotal(newTotal)
        });
    }

    console.log(total);

    return (
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
                        <th scope="row"><img style={{ height: '200px', width: "200px", margin: 'auto' }} className="img-fluid" src={`data:image/jpeg;base64,${ product.imgData.img }`} alt="" /></th>
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
    );
};

export default CartProducts;