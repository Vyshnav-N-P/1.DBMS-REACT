import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import  '../components/detail.css';

export default function ProductDetail(){
    const [qty,setQty] = useState(1);
    const {id}=useParams();

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
                    <div className="Cartfuntoins">
                        <div className="Qtycontainer">
                            <button className='sub' onClick={()=>{if(qty>=1){setQty(qty=>qty-1);}}}>-</button>
                            <p className='qty'>{qty}</p>
                            <button className='add' onClick={()=>{setQty(qty=>qty+1);}}>+</button>
                        </div>
                        <button type="button" id="tocart">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};