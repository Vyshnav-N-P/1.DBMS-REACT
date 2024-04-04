import React,{useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import  '../components/detail.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductDetail(){
    const navigate=useNavigate();
    const [qty,setQty] = useState(1);
    const {id}=useParams();
    const [product,setProduct] = useState();
    const {message,setMessage} = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products/category/${id}`);
                if (response.status === 200) {
                    console.log(response.data);
                    setProduct(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);
    const handleSubmit = async ()=> {
        e.preventDefault();
        try {
            const response=await axios.post(`http://localhost:5000/products/category/${id}`,JSON.stringify(qty));
            if(response.status){
                navigate("/cart-page");
            }
            else {
                setMessage("Could not Add to cart ,Try again later ");
            };
    }
        catch(error){
            console.error("Error fetching data", error);
        };
        
    }
    return (
        <div>
            <Header />
            <div className="Maincontainer">
                <div className="imagecontainer"> 
                    <img src="" alt="" />
                </div>
                <div className="detailscontainer">
                    <div>
                        <h1>NAME</h1>
                        <div className="pricecontainer"><p className="fprice">240000</p><p className="oprice">25000</p></div>
                        
                    </div>
                    
                    <div className="details">

                    </div>
                    <div className="Cartfuntions">
                        <div className="Qtycontainer">
                            <button className='sub' onClick={()=>{if(qty>=1){setQty(qty=>qty-1);}}}>-</button>
                            <p className='qty'>{qty}</p>
                            <button className='add' onClick={()=>{setQty(qty=>qty+1);}}>+</button>
                        </div>
                        <button type="submit" id="tocart" onClick={handleSubmit}>ADD TO CART</button>
                    </div>
                    <p>{message}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
};