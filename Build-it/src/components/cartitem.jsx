import React,{useState,useEffect} from 'react';
import "../components/cartitem.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { usecartStore } from "../Store/cartStore.jsx";

export default function cartitem({product}){
    const [qty,setQty] = useState(product.qty);
    const [price,setPrice] = useState(product.price);
    const productlink= `/products/${product.category}/${product.id}`

    const { removefromcart,qtysetter,cart }=usecartStore((state) => ({
        removefromcart: state.removefromcart,
        qtysetter:state.qtysetter,
        cart:state.cart
    }));
    
    
    const handleClick =  async() => {
        let Id=product.id;
        try{
            const response = await axios.delete('http://localhost:5000/cart-page',{data: { Id }});
            if (response.status === 200) {
                removefromcart(product.id);
            }
        }
        catch(error){
            console.error("Error fetching data", error);
            }
        };

    useEffect(() =>{
        if(qty===1){
            setPrice(product.price);
        }
        setPrice(product.price*qty);
        
    },[qty]);
    const btnsubtract =()=>{
        if(qty==0){
            return;
        }
        setQty(qty=>qty-1);      
    };
 

    return (
        <div>
            <div className="item-container">
                <img src={product.imageurl} alt="Image of the product" className='image-product'/>
                <Link to={productlink} ><h5>{product.name}</h5> </Link>
                <div className='Qty-container'>
                    <p>Qty</p>
                    <button className='sub' onClick={btnsubtract}>-</button>
                    <p className='qty'>{qty}</p>
                    <button className='add' onClick={()=>{setQty(qty=>qty+1);qtysetter(product.id,qty)}}>+</button>
                </div>
                <p className='price'>₹ {price}</p>
                <button className='delete' onClick={handleClick}><i class="fa-solid fa-xmark"></i></button>
            </div>
        </div>
    )
}