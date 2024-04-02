import React from "react";
import '../components/profile.css';
import Profile from "../components/Profile";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Productpage(){
    const mainproductlist=[
        {id: 0,name: 'PROCESSOR',imgurl: '', link:'/products/processors/'},
        {id: 1,name: 'GRAPHICS CARD',imgurl: '', link:'/products/graphics card/'},
        {id: 2,name: 'RAM',imgurl: '', link:'/products/rams/'},
        {id: 3,name: 'MOTHER BOARD',imgurl: '', link:'/products/motherboard/'},
        {id: 4,name: 'MEMRORY',imgurl: '', link:'/products/memory/'},
        {id: 5,name: 'POWER SUPPLY',imgurl: '', link:'/products/power supply/'},
    ];
    const otherproductlist=[
        {id: 6,name: 'LIQUID COOLERS',imgurl: '', link:'/products/liquid coolers/'},
        {id: 7,name: 'CASES',imgurl: '', link:'/products/cases'},
        {id: 8,name: 'GAMING HEADSETS',imgurl: '', link:'/products/gaming headset/'},
        {id: 9,name: 'KEYBOARD',imgurl: '', link:'/products/keyboard/'},
        {id: 10,name: 'MOUSE',imgurl: '', link:'/products/mouse/'},
        {id: 11,name: 'MONITORS',imgurl: '', link:'/products/monitors'},
        {id: 12,name: 'GAMING CHAIRS',imgurl: '', link:'/products/gaming chairs/'},
        {id: 13,name: 'MOUSEPAD',imgurl: '', link:'/products/mousepad/'},
        {id: 14,name: 'CONTROLLERS',imgurl: '', link:'/products/controllers/'}
    ];
    const products=<Profile list={mainproductlist}/>
    const otherproducts=<Profile list={otherproductlist}/>
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