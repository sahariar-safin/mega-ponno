import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import FlashSell from '../../Home/FlashSell/FlashSell';
import Footer from '../../Sheared/Footer/Footer';
import Navbar from '../../Sheared/Navbar/Navbar';
import ProductDetails from '../ProductDetails/ProductDetails';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/product?id=${ id }`)
            .then(function (response) {
                const data = response.data;
                setProduct(data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [id])
    return (
        <div>
            <Navbar></Navbar>
            {product.map(product => <ProductDetails product={product}></ProductDetails>)}
            <FlashSell></FlashSell>
            <Footer></Footer>
        </div>
    );
};

export default Product;