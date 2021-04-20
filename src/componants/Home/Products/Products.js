import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TabPanel } from '../CategoryTab/CategoryTab';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({ value, categorySelected, index }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:5000/categorizedProducts', { categorySelected })
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
            <div className="container row ms-auto me-auto">
                <div className="d-flex flex-wrap justify-content-evenly">
                    {
                        products.map(product => <ProductCard product={product}></ProductCard>)
                    }
                </div>
            </div>
        </TabPanel>
    );
};

export default Products;