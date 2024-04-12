import React, { useEffect, useState } from "react";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CartItem from '../components/cartitem.jsx';
import axios from "axios";

import { usecartStore } from "../Store/cartStore.jsx";


export default function Cart() {

    const [cartlenth,setCartlenth] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { cart,removefromcart,clearcart } = usecartStore((state) => ({
        cart:state.cart,
        removefromcart:state.removefromcart,
        clearcart:state.clearcart
    }));

    // const clearing=()=>{
    //     useEffect(()=>{
    //         const deleteing=async() =>{
    //             try{
    //                 await axios.delete('http://localhost:5000/cart');
    //                 setCartlenth(0);
    //                 clearcart();
    //             }catch(err){
    //                 console.log(err);
    //             }
    //         }
    //     })
    // }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/cart-page');
                if (response.status === 200) {

                    setCartlenth(response.data.length);
                    usecartStore.setState({cart: response.data});
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
        products = cart.map(item => (
            <li key={item.cartid}><CartItem product={item} /></li>
        ));
    }

    

    useEffect(() => {
        setCartlenth(cart.length);
    }, [cart]);

    return (
        <>
            <Header />
            <div className="Page-container">
                <div className="heading">
                    <h1 id="page-header">CART</h1>
                    <p id="itemsno">{cartlenth} items</p>
                </div>
                <hr />
                <div className='items-container'>
                    <ul>{products}</ul>
                    <button onClick={clearcart}>Clear Cart</button>
                </div>
            </div>
            <Footer />
        </>
    );
}
