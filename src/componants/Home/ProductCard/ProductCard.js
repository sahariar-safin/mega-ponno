import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img style={{height: "300px"}} src={`data:image/jpeg;base64,${product.imgData.img}`} class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text"><strong>Tk. {product.price}</strong></p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    );
};

export default ProductCard;