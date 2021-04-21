import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from '../../../App';

const ProductCard = ({ product }) => {
    const history = useHistory();
    const [cart, setCart] = useContext(CartContext);
    const handleAddCart = (id) => {
        if (cart.find(element => element === id)) {
            alert("This item already added in your cart!")
        } else {
            const newCart = [...cart];
            newCart.push(id)
            setCart(newCart)
        }
    }
    return (
        <div class="card" style={{ width: "18rem", marginBottom: "15px" }}>
            <img onClick={() => history.push(`/product/${ product.productID }`)} style={{ height: "300px" }} src={`data:image/jpeg;base64,${ product.imgData.img }`} class="card-img-top img-fluid" alt="..." />
            <div onClick={() => history.push(`/product/${ product.productID }`)} class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text"><strong>Tk. {product.price}</strong></p>
            </div>
            <a onClick={() => handleAddCart(`${ product.productID }`)} class="btn btn-primary">Add to Cart</a>
        </div>
    );
};

export default ProductCard;