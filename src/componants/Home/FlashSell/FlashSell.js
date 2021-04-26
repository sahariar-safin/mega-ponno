import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import ContentLoader from "react-content-loader"

const FlashSell = () => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 22;

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

    const windowsWidth = window.screen.width;
    return (
        <div style={{ marginTop: "30px" }} className='container-fluid row ms-auto me-auto'>
            <div className="container-fluid mb-4 row d-flex justify-content-between">
                <h1 style={{ marginBottom: "30px", display: 'contents' }}>Flash Sell</h1>
                <Link style={{ width: "100px" }} to="/flashsells">
                    <button className="btn btn-primary">See all</button>
                </Link>
            </div>

            <div style={{ padding: `0 ${ chevronWidth }px` }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={windowsWidth > 1450 ? 5 : (windowsWidth > 992 ? 3 : (windowsWidth > 768 ? 2 : (windowsWidth > 576 ? 2 : 2)))}
                    infiniteLoop={true}
                    gutter={20}
                    leftChevron={<button className="btn btn-success">{'<'}</button>}
                    rightChevron={<button className="btn btn-success">{'>'}</button>}
                    outsideChevron={true}
                    chevronWidth={chevronWidth}
                >
                    {
                        flashSellsProducts.length ? flashSellsProducts.map(product => <ProductCard product={product}></ProductCard>
                        )
                            :
                            <ContentLoader
                                speed={2}
                                width={800}
                                height={450}
                                column={5}
                                row={1}
                                viewBox="0 0"
                                padding="0"
                                backgroundColor="#f4f1f1"
                                foregroundColor="#d9d3d3"
                            >
                                <rect x="11" y="356" rx="2" ry="2" width="140" height="10" />
                                <rect x="11" y="372" rx="2" ry="2" width="140" height="10" />
                                <rect x="9" y="37" rx="2" ry="2" width="304" height="304" />
                                <rect x="13" y="390" rx="0" ry="0" width="135" height="37" />
                                <rect x="160" y="388" rx="0" ry="0" width="131" height="39" />
                                <rect x="265" y="403" rx="0" ry="0" width="2" height="4" />
                                <rect x="312" y="419" rx="0" ry="0" width="1" height="0" />
                                <rect x="330" y="357" rx="2" ry="2" width="140" height="10" />
                                <rect x="330" y="373" rx="2" ry="2" width="140" height="10" />
                                <rect x="328" y="38" rx="2" ry="2" width="304" height="304" />
                                <rect x="332" y="391" rx="0" ry="0" width="135" height="37" />
                                <rect x="479" y="389" rx="0" ry="0" width="131" height="39" />
                                <rect x="584" y="403" rx="0" ry="0" width="2" height="4" />
                            </ContentLoader>
                    }
                </ItemsCarousel>
            </div>
        </div >
    );
};

export default FlashSell;