import React, { useEffect, useState } from "react";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CartItem from '../components/cartitem.jsx';
import axios from "axios";
import useAuth from "../hooks/useAuth.jsx";
import "../components/cart.css"

import { usecartStore } from "../Store/cartStore.jsx";


export default function Cart() {
    const {auth} = useAuth();
    const [totalprice,settotalprice]= useState(0);
    const [quantity,setQuantity]=useState(0);
    const [cartlenth,setCartlenth] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { cart,removefromcart,clearcart } = usecartStore((state) => ({
        cart:state.cart,
        removefromcart:state.removefromcart,
        clearcart:state.clearcart
    }));

    const userid=auth?.user ?.userId;
    console.log(userid);
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
                const response = await axios.get(`http://localhost:5000/cart-page/${userid}`);
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
        let totalprice=0;
        let quantity =0;
        cart.forEach(item => {
            totalprice += parseInt(item.price)*parseInt(item.qty);
            quantity += item.qty;
        });
        settotalprice(totalprice);
        setQuantity(quantity);
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
            <div>
                <div className="total-header"><h3>CART TOTALS</h3></div>
                <div className="carttotal-details">
                    <p>NUMBERS : {quantity}</p>
                    <p>TOTAL : {totalprice}</p>
                    <div className="buttonwrapper"><button className="checkout-button">PROCEED TO CHECKOUT</button></div>
                </div>
            </div>
            <Footer />
        </>
    );
}
