import React, { useEffect, useState } from "react";
import "../components/Header.css";
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import { usecartStore } from "../Store/cartStore";
import useAuth from "../hooks/useAuth";
import logo from  "C:/Users/vyshn/OneDrive/Pictures/logo.png"

function Header() {
  const { auth, setAuth } = useAuth();
  const { cart } = usecartStore((state) => ({ cart: state.cart }));
  const [cartLength, setCartLength] = useState(0);
  const [showdropdown, setShowdropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Update cart length dynamically whenever cart changes
    setCartLength(cart.length);
  }, [cart,]); // Include cart in dependency array
  const handlelogout = () => {
    setAuth(null);
    navigate("/");
  };
  return (
    <div className="header-container">
      <div className="topnavbar">
        <div className="Logo-container">
          <Link to="/" className="hlinking">
            <img src={logo} alt="LOGO" />
          </Link>
        </div>
        <Searchbar />
        <div className="top-nav-right">
          {auth?.user ? (
            <div className="userProfile">
              <button className="userpro"
                type="button"
                onClick={() => {
                  setShowdropdown(!showdropdown);
                }}
              >
                {auth.user.username}
              </button>
              <div className="logoutcontainer">
                {showdropdown && (
                  <div>
                    <button className='logout' onClick={handlelogout}>LOG OUT</button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link to="/Login-page">
              <i className="fa-solid fa-user"></i> Login/Register
            </Link>
          )}
          <>
            {auth?.user ? (
              <>
                <Link to={`/cart-page/${auth?.user?.userId}`} className="cartbutton">Cart</Link>
                <p className="Cart-length">{cartLength}</p>
              </>
            ) : (
              <Link to={"/login-page"}>Cart</Link>
            )}
          </>
        </div>
      </div>
      <div className="main-nav">
        <div className="main-nav-content">
         
          <Link to="/brands">BRANDS</Link>
          <Link to="/products">CATEGORIES</Link>
          <Link to="/products">BUILD</Link>
    
        </div>
      </div>
    </div>
  );
}
export default Header;
