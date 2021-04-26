import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
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
        <div class="productCard card" style={{ width: "18rem", marginBottom: "15px" }}>
            <p style={{ width: 'auto', borderRadius: "5px", padding: "2px 5px", position: "absolute", right: "10px ", top: '10px', textAlign: "center" }} className="bg-warning">{product.originalPrice && Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) + "% Off"}</p>
            <img onClick={() => history.push(`/product/${ product.productID }`)} style={{ height: "300px" }} src={`data:image/jpeg;base64,${ product.imgData.img[0] }`} class="card-img-top img-fluid" alt="..." />
            <div onClick={() => history.push(`/product/${ product.productID }`)} class="card-body">
                {product.sold && <p style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", backgroundColor: "#ededed", border: '1px solid lightgray' }}> <strong style={{ fontSize: "15px", padding: "2px 5px" }} className="bg-warning" > <FontAwesomeIcon icon={faStar} /> {product.star}/5</strong> <strong>{product.sold} Sold</strong> </p>}
                <h5 class="card-title">{product.name || <Skeleton delay={3} />}</h5>
                <p class="card-text"> {product.originalPrice > 0 && <small><s>Tk. {product.originalPrice}</s></small>} <strong>Tk. {product.price || <Skeleton count={5} />}</strong></p>
            </div>
            <div className="mb-2 d-flex flex-wrap justify-content-evenly">
                <a onClick={() => handleAddCart(`${ product.productID }`)} class="btn btn-primary">Add to Cart</a>
                <a onClick={() => handleOrderNow(`${ product.productID }`)} class="btn btn-warning">Order Now</a>
            </div>
        </div >
    );
};

export default ProductCard;