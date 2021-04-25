import React, { Suspense } from 'react';
import Navbar from '../../Sheared/Navbar/Navbar';
import Footer from '../../Sheared/Footer/Footer';
import { lazy } from 'react';


const Carousel = lazy(() => import('../Carousel/Carousel'))
const FlashSell = lazy(() => import('../FlashSell/FlashSell'))
const CategoryTab = lazy(() => import('../CategoryTab/CategoryTab'))

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Suspense fallback={<div>Loading...</div>}>
                <>
                    <Carousel></Carousel>
                    <FlashSell></FlashSell>
                    <CategoryTab></CategoryTab>
                </>
            </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default Home;