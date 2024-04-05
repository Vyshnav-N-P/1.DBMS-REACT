import React, { useEffect, useState } from "react";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CartItem from '../components/cartitem.jsx';
import { Axios } from "axios";

export default function Cart() {
    const [nitems, setNitems] = useState(0);
    const [cartitems,setCart] = useState([]);
    useEffect(() =>{
        const fetchData =async () => {
        try {
            const response = await Axios.get('http://localhost:5000/cart-page');
            if (response.status===200){
                setCart(response.data);
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        };
        fetchData();
    }},[]);

    const items = [
        {
            id: 1,
            price: 100,
            image: 'images'
        },
        {
            id: 2,
            price: 150,
            image: 'another-image'
        }
    ];

    let products=cartitems.map(item => (<li key={item.id}><CartItem  product={item} /></li>));

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
