import React, { useState, useEffect } from "react";
import axios from "axios";
import '../components/searchbar.css';
import { Link } from "react-router-dom";

export default function Searchbar() {
    const [search, setSearch] = useState('');
    const [product, setProduct] = useState([]);
    const [showMenu, setShowMenu] = useState(false); // State to control menu visibility
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/',{params: {search}});
                if (response.status === 200) {
                    console.log(response.data);
                    setProduct(response.data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        if (search !== '') { // Check if search query is not empty
            fetchData();
        } else {
            // If search query is empty, reset the product state
            setProduct([]);
        }
    }, [search]); // Trigger useEffect on search state change
     
    const filteredproducts = product.map(item => (
        <li key={item.id}>
            <Link to={`/products/${item.category}/${item.id}`}>
                {item.name}
            </Link>
        </li>
    ));

    return (
        <div className="searchbar-container">
            <form className="searchbar-form">
                <input
                    className="searchbar-input"
                    value={search}
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => { setSearch(e.target.value) }}
                    onFocus={() => setShowMenu(true)} // Show menu on input focus
                    onBlur={() => setShowMenu(false)} // Hide menu on input blur
                />
                {/* <button className="searchbar-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button> */}
                {showMenu && ( // Render the menu if showMenu is true
                    <div className="dropdown-menu">
                        {/* Dropdown menu content */}
                        <ul>   
                        {filteredproducts}
                        </ul>
                    </div>
                )}
            </form>
        </div>
    );
}
