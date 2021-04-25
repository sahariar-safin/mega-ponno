import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Banner1 from '../../../Images/9pm3d8jakjjny0q3.png'
import Banner2 from '../../../Images/9pm3d8jakjiro3bg.png'

const Images = [
    {
        img: Banner1
    },
    {
        img: Banner2
    }
]

const Carousel = () => {
    console.log(Images);
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    {
                        Images.map((banner, index) =>
                            < div style={{ height: '450px' }} class={index === 0 ? "carousel-item active secound-Banner" : "carousel-item first-Banner"}>
                                <img style={{ height: '450px' }} src={banner.img} class="d-block img-fluid container w-100" alt="..." />
                            </div> || <Skeleton height={200} width={100}></Skeleton>)
                    }
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    );
};

export default Carousel;