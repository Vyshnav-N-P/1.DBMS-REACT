import React,{useState,useEffect} from 'react';
import "../components/cartitem.css";

export default function cartitem({product}){
    const [qty,setQty] = useState(1);
    const [price,setPrice] = useState(product.price);

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
                <img src={product.image} alt="Image of the product" className='image-product'/>
                <p>details...</p>
                <div className='Qty-container'>
                    <p>Qty</p>
                    <button className='sub' onClick={btnsubtract}>-</button>
                    <p className='qty'>{qty}</p>
                    <button className='add' onClick={()=>{setQty(qty=>qty+1);}}>+</button>
                </div>
                <p className='price'>₹ {price}</p>
            </div>
        </div>
    )
}