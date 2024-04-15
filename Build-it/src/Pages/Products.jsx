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
        {id: 0,name: 'PROCESSOR',imgurl: '', category:'processors'},
        {id: 1,name: 'GRAPHICS CARD',imgurl: '', category:'graphicscards'},
        {id: 2,name: 'RAM',imgurl: '', category:'ram' },
        {id: 3,name: 'MOTHER BOARD',imgurl: '',  category:'motherboard'},
        {id: 4,name: 'MEMORY',imgurl: '',category:'ram'},
        {id: 5,name: 'POWER SUPPLY',imgurl: '',  category:'power supply'},
    ];
    const otherproductlist=[
        {id: 6,name: 'LIQUID COOLERS',imgurl: '',category:'liquidcoolers'},
        {id: 7,name: 'CASES',imgurl: '',category:'cases'},
        {id: 8,name: 'GAMING HEADSETS',imgurl: '',category:'headsets'},
        {id: 9,name: 'KEYBOARD',imgurl: '',category:'keyboard'},
        {id: 10,name: 'MOUSE',imgurl: '',category:'mouse'},
        {id: 11,name: 'MONITORS',imgurl: '',category:'monitors'},
        {id: 12,name: 'GAMING CHAIRS',imgurl: '',category:'liquidcoolers'},
        {id: 13,name: 'MOUSEPAD',imgurl: '',category:'mousepad'},
        {id: 14,name: 'CONTROLLERS',imgurl: '',category:'liquidcoolers'}
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