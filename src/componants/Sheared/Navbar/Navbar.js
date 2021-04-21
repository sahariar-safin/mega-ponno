import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { CartContext } from '../../../App';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [cart, setCart] = useContext(CartContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">Smart shop</Link>
                <button class="navbar-toggler ms-auto m-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon style={{color: "black"}} icon={faSearch} />
                </button>
                <div class="collapse navbar-collapse searchForm" id="navbarSupportedContent">
                    <form style={{ width: "63%" }} class="d-flex me-auto ms-auto">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="d-flex ">
                    <Link style={{ color: 'black' }} to="/cart"><FontAwesomeIcon style={{ fontSize: "35px" }} icon={faShoppingBag} /></Link> <p style={{ backgroundColor: "black", padding: "5px 11px", borderRadius: "50%", color: "white" }}>{cart.length}</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;