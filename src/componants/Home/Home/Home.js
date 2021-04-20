import React from 'react';
import Carousel from '../Carousel/Carousel';
import FlashSell from '../FlashSell/FlashSell';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <FlashSell></FlashSell>
        </div>
    );
};

export default Home;