import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Carousel = () => {

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/banners')
            .then(function (response) {
                const data = response.data;
                setBanners(data)
                console.log(data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [banners])

    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                {
                    banners.map((banner, index) =>
                        <div style={{height: '450px'}} class={index === 0 ? "carousel-item active" : "carousel-item"}>
                            <img style={{height: '450px'}} src={`data:image/jpeg;base64,${banner.imgData.img}`} class="d-block w-100" alt="..." />
                        </div>)
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
    );
};

export default Carousel;