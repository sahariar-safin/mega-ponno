import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TabPanel } from '../CategoryTab/CategoryTab';
import ProductCard from '../ProductCard/ProductCard';
import ProductLoader from '../ProductsLoader/ProdectsLoader';

const Products = ({ value, categorySelected, index }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([]);
        axios.post('https://frozen-fjord-85553.herokuapp.com/categorizedProducts', { categorySelected })
            .then(function (response) {
                const data = response.data;
                setProducts(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [categorySelected])
    return (
        <TabPanel index={index} value={value}>
            <h1 className="text-center">{categorySelected}</h1>
            <div className="products container row ms-auto me-auto">
                {products.length
                    ? <div className="d-flex flex-wrap justify-content-evenly" style={{ paddingTop: "50px" }}>{products.map(product => <ProductCard product={product}></ProductCard>)}</div>
                    : <ProductLoader></ProductLoader>
                }
            </div>
        </TabPanel>
    );
};

export default Products;