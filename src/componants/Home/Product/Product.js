import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import FlashSell from '../FlashSell/FlashSell';
import Footer from '../../Sheared/Footer/Footer';
import Navbar from '../../Sheared/Navbar/Navbar';
import ProductDetails from '../ProductDetails/ProductDetails';
import ContentLoader from 'react-content-loader';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get(`https://frozen-fjord-85553.herokuapp.com/product?id=${ id }`)
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
            { product.length
                ? product.map(product => <ProductDetails product={product}></ProductDetails>)
                : <ContentLoader className="container row ms-auto me-auto" viewBox="0 0 1300 500" height={"auto"} width={window.screen.width}>
                    <rect x="20" y="15" rx="20" ry="20" width="300" height="320" />
                    <rect x="92" y="347" rx="5" ry="5" width="45" height="45" />
                    <rect x="148" y="347" rx="5" ry="5" width="45" height="45" />
                    <rect x="205" y="347" rx="5" ry="5" width="45" height="45" />
                    <rect x="361" y="17" rx="10" ry="10" width="420" height="33" />
                    <rect x="361" y="71" rx="10" ry="10" width="315" height="33" />
                    <rect x="361" y="125" rx="10" ry="10" width="233" height="20" />
                    <rect x="361" y="216" rx="5" ry="5" width="195" height="13" />
                    <rect x="361" y="251" rx="5" ry="5" width="195" height="13" />
                    <rect x="367" y="311" rx="8" ry="8" width="130" height="38" />
                    <rect x="515" y="311" rx="8" ry="8" width="130" height="38" />
                </ContentLoader>
            }
            <FlashSell></FlashSell>
            <Footer></Footer>
        </div>
    );
};

export default Product;