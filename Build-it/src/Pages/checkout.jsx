import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../components/checkoutform.css';
import Header from '../components/Header';
import { usecartStore } from '../Store/cartStore';
const CheckoutForm = () => {
  const [totalprice,settotalprice]= useState(0);
  const [quantity,setQuantity]=useState(0);
  const [cartlenth,setCartlenth] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        state: '',
        country: '',
      });
      const { cart,removefromcart,clearcart } = usecartStore((state) => ({
        cart:state.cart,
        removefromcart:state.removefromcart,
        clearcart:state.clearcart
    }));
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
          const response = await axios.post('http://localhost:5000/cart-page/checkout', formData);
          console.log(response.data); // Handle successful response
        } catch (error) {
          console.error(error); // Handle error
        }
      };
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
    <div className="checkout-form">  
    <form onSubmit={handleSubmit}>
    <h2 className='maincontainerheader'>CHECKOUT</h2>
    <hr  className='maincontainerheader-line'/>
      <div>
      <label>
        FIRSTNAME
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        LASTNAME
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        MOBILE
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </label>
      <label>
        EMAIL
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        ADRESS LINE 1
        <input
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
        />
      </label>
      <label>
        ADRESS LINE 2
        <input
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
        />
      </label>
      <label>
        STATE
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </label>
      <label>
        COUNTRY
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className='checkout-button'>PROCEED TO PAY</button>
      </div>
  
    </form>
    <div className="cart-summary">
        <h3 className='cartsumm'>CART SUMMARY</h3>
        <hr className='checkoutline' />    
        <p>ITEMS: {quantity}</p>
        <p>PRICE:₹ {totalprice+200*quantity} </p>
        <p>TAX:₹ 500</p>
        <p>DISCOUNT:₹ {200*quantity}</p>
        <p>PAYABLE:₹ {totalprice+500}</p>
       
      </div>
      
  </div></>
   
  );
};

export default CheckoutForm;
