import React from 'react';
import { useState } from 'react';

const Quantity = ({ price }) => {
    const [cartQuantity, setCartQuantity] = useState({
        quantity: 1
    })

    return (
        <>
            <td>
                <div className="quantity d-flex flex-inline align-item-center ">
                    <button onClick={() => {
                        {
                            cartQuantity.quantity > 1 &&
                                setCartQuantity({
                                    quantity: cartQuantity.quantity - 1
                                });
                        }
                    }} className="btn btn-light">-</button>
                    <p id="quantity" className="m-2">{cartQuantity.quantity}</p>
                    <button onClick={() => {
                        setCartQuantity({
                            quantity: cartQuantity.quantity + 1
                        });
                    }} className="btn btn-light from-append">+</button>
                </div>
            </td>
            <td id="price">
                Tk. {price * cartQuantity.quantity}
            </td>
        </>
    );
};

export default Quantity;