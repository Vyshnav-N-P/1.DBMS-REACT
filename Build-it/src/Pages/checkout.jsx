import React, { useState } from 'react';
import axios from 'axios';
import '../components/checkoutform.css';
import Header from '../components/Header';
const CheckoutForm = () => {
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
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:5000/cart-page/checkout', formData);
          console.log(response.data); // Handle successful response
        } catch (error) {
          console.error(error); // Handle error
        }
      };

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
        <p>ITEMS: 3</p>
        <p>PRICE: $100</p>
        <p>TAX: $10</p>
        <p>DISCOUNT: $5</p>
        <p>PAYABLE: $105</p>
       
      </div>
      
  </div></>
   
  );
};

export default CheckoutForm;
