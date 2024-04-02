import React from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

function Header(){
    return(
        <div className="header-container">
        <div className="topnavbar">
        <div className="Logo-container"><Link to="/" className="hlinking">
                <img src="" alt="LOGO" /></Link>
            </div>
            <Searchbar />
            <div className="top-nav-right">
            <Link to="/Login-page"><i className="fa-solid fa-user"></i> Login/Register</Link>
            <Link to="/cart-page">Cart</Link>
            </div>
        </div>
        <div className="main-nav">
            <div className="main-nav-content">
                <a href="#HOME">PRE BUILD</a>
                <Link to="/brands">BRANDS</Link>
                <Link to="/products">CATEGORIES</Link>
                <Link to="/products">BUILD</Link>
                <a href="news.html">NEW</a>
                </div>
               
            </div>
        
        </div>
    )
}
export default Header;

    