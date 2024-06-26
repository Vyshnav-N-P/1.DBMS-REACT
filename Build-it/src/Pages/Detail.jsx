import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import '../components/detail.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { usecartStore } from "../Store/cartStore";
import useAuth from "../hooks/useAuth";

export default function ProductDetail() {
    const navigate = useNavigate();
    const {auth} = useAuth();
    const userid = auth?.user?.userId;
    const [qty, setQty] = useState(1);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [message, setMessage] = useState(""); // Corrected useState usage
    const location = useLocation();
    const { pathname } = location;
    const addedprice=parseFloat(200) +parseInt( product.price);
    const {cart ,addtocart} =usecartStore((state)=>({
        cart:state.cart,
        addtocart:state.addtocart
    }));

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Corrected Axios URL concatenation
                const response = await axios.get(
                    pathname.includes("/products") 
                        ? `http://localhost:5000/products/category/${id}` 
                        : `http://localhost:5000/brands/brandname/${id}`
                );
                if (response.status ===200) {
                    console.log(response.data);
                    setProduct(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        console.log(product);

        fetchData();
    }, []);

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`http://localhost:5000/products/category/${id}`, { qty , userid });
            console.log(response);
            if (response.status === 200) {
                addtocart(id);
                // navigate("/cart-page");
            } else {
                setMessage("Could not Add to cart, Try again later ");
            }
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    return (
        <div>
            <Header />
            <hr className="mainline"/>
            <div className="Maincontainer">
                <div className="imagecontainer">
                    <img src={product.imageurl} alt="" />
                </div>
                <div className="detailscontainer">
                    <div>
                        <h1>{product.name}</h1>
                        <div className="pricecontainer"><p className="fprice">₹ {parseInt(addedprice)}</p><p className="oprice">₹ {parseInt(product.price)}</p></div>

                    </div>

                    <div className="details">
                        <hr />
                        <p className="productdetails">{product.DETAILS}</p>
                        <hr />
                    </div>
                    <div className="Cartfuntions">
                        <div className="Qtycontainer">
                            <button className='sub' onClick={() => { if (qty >= 1) { setQty(qty => qty - 1); } }}>-</button>
                            <p className='qty'>{qty}</p>
                            <button className='add' onClick={() => { setQty(qty => qty + 1); }}>+</button>
                        </div>
                        <button type="button" id="tocart" onClick={()=>{auth?.user ? handleSubmit() : navigate('/login-page')}}>ADD TO CART</button>
                    </div>
                    <p>{message}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
};
