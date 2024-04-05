import React, { useEffect, useState } from "react";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CartItem from '../components/cartitem.jsx';
import axios from "axios";

export default function Cart() {
    const [nitems, setNitems] = useState(0);
    const [cartitems, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/cart-page');
                if (response.status === 200) {
                    console.log(response.data);
                    setCart(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    let products = null;

    if (loading) {
        products = <p>Loading...</p>;
    } else if (error) {
        products = <p>{error}</p>;
    } else {
        products = cartitems.map(item => (
            <li key={item.id}><CartItem product={item} /></li>
        ));
    }

    const totalItems = cartitems.length;

    useEffect(() => {
        setNitems(totalItems);
    }, [totalItems]);

    return (
        <>
            <Header />
            <div className="Page-container">
                <div className="heading">
                    <h1 id="page-header">CART</h1>
                    <p id="itemsno">{nitems} items</p>
                </div>
                <hr />
                <div className='items-container'>
                    <ul>{products}</ul>
                </div>
            </div>
            <Footer />
        </>
    );
}
