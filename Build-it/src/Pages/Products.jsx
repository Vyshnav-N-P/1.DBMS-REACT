import React from "react";
import '../components/profile.css';
import Profile from "../components/Profile";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useLocation } from "react-router-dom";

function Productpage(){
    const location = useLocation();
    let {pathname} = location;

    const mainproductlist=[
        {id: 0,name: 'PROCESSOR',imageurl: '', category:'PROCESSOR'},
        {id: 1,name: 'GRAPHICS CARD',imageurl: '', category:'GRAPHICS'},
        {id: 2,name: 'RAM',imageurl: '', category:'MEMORY' },
        {id: 3,name: 'MOTHER BOARD',imageurl: '',  category:'MOTHERBOARD'},
        {id: 4,name: 'SSD',imageurl: '',category:'STORAGE'},
        {id: 5,name: 'POWER SUPPLY',imageurl: '',  category:'PSU'},
    ];
    const otherproductlist=[
        {id: 6,name: 'LIQUID COOLERS',imageurl: '',category:'COOLING'},
        {id: 7,name: 'CASES',imageurl: '',category:'CASE'},
        {id: 8,name: 'GAMING HEADSETS',imageurl: '',category:'HEADPHONE'},
        {id: 9,name: 'KEYBOARD',imageurl: '',category:'KEYBOARD'},
        {id: 10,name: 'MOUSE',imageurl: '',category:'MOUSE'},
        {id: 11,name: 'MONITORS',imageurl: '',category:'MONITOR'},
        {id: 12,name:'SPEAKER',imageurl: '',category:'SPEAKER'},
        {id: 13,name:'UPS',imageurl: '',category:'UPS'}
    ];
    const products=<Profile list={mainproductlist} url={pathname} identifier='category' />
    const otherproducts=<Profile list={otherproductlist} url={pathname} identifier='category'/>
    return(
        <>
        <Header />
        <div className="productpage">
            <div className="heading">
                <h1 id="page-header">PRODUCTS</h1>
                <p id="itemsno">6 items</p>
            </div>
            <hr />
            <div className='Profiles-container'>
                {products}
            </div>
            <div className="heading">
                <h1 id="page-header">OTHER PRODUCTS</h1>
                <p id="itemsno">9 items</p>
            </div>
            <hr />
            <div className='Profiles-container'>
                {otherproducts}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Productpage;