import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../Sheared/Footer/Footer';
import Navbar from '../../Sheared/Navbar/Navbar';
import ProductCard from '../ProductCard/ProductCard';

const AllFlashSellProducts = () => {
    const [flashSellsProducts, setFlashSellProducts] = useState([]);

    useEffect(() => {
        axios.get('https://frozen-fjord-85553.herokuapp.com/flashSell')
            .then(function (response) {
                const data = response.data;
                setFlashSellProducts(data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-center m-5">Flash Sell Products</h3>
            <div style={{ marginTop: "25px" }} className="container row d-flex flex-wrap justify-content-evenly ms-auto me-auto">
                {flashSellsProducts.map(product => <ProductCard product={product}></ProductCard>)}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllFlashSellProducts;