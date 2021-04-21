import React from 'react';
import Carousel from '../Carousel/Carousel';
import FlashSell from '../FlashSell/FlashSell';
import Navbar from '../../Sheared/Navbar/Navbar';
import CategoryTab from '../CategoryTab/CategoryTab';
import Footer from '../../Sheared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <FlashSell></FlashSell>
            <CategoryTab></CategoryTab>
            <Footer></Footer>
        </div>
    );
};

export default Home;