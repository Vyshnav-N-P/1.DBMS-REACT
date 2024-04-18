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
        {id: 0,name: 'PROCESSOR',imageurl: 'https://pcper.com/wp-content/uploads/2018/04/c808-dsc04805-scaled.jpg', category:'PROCESSOR'},
        {id: 1,name: 'GRAPHICS CARD',imageurl: 'https://dlcdnwebimgs.asus.com/gain/CD41F925-4CD0-4D43-8722-0BBA1953E46D/w717/h525', category:'GRAPHICS'},
        {id: 2,name: 'RAM',imageurl: "https://assets.corsair.com/image/upload/f_auto,q_auto/v1/akamai/pdp/vengeance-rgb-pro/Content/Vengeance_RGB_Pro_PDP_Black_04.png", category:'MEMORY' },
        {id: 3,name: 'MOTHER BOARD',imageurl: 'https://zakelijk.alternate.nl/p/1200x630/5/0/MSI_B650_GAMING_PLUS_WIFI_socket_AM5_moederbord@@1919705_1.jpg',  category:'MOTHERBOARD'},
        {id: 4,name: 'SSD',imageurl: 'https://content.crucial.com/content/dam/crucial/dram-products/ddr5-pro/images/product/crucial-ddr5-pro-udimm-kit-front.psd.transform/medium-png/image.png',category:'STORAGE'},
        {id: 5,name: 'POWER SUPPLY',imageurl: 'https://e7.pngegg.com/pngimages/405/611/png-clipart-power-supply-unit-power-converters-atx-gigabyte-technology-80-plus-psu-electronic-device-computer-hardware.png',  category:'PSU'},
    ];
    const otherproductlist=[
        {id: 6,name: 'LIQUID COOLERS',imageurl: 'https://m.media-amazon.com/images/I/61i9iqYEEbL._SX522_.jpg',category:'COOLING'},
        {id: 7,name: 'CASES',imageurl: "https://www.montechpc.com/Upload/product/product_d_202310301103572.png",category:'CASE'},
        {id: 8,name: 'GAMING HEADSETS',imageurl: 'https://e7.pngegg.com/pngimages/833/918/png-clipart-kingston-hyperx-cloud-ii-headset-7-1-surround-sound-headphones-headphones-electronics-cloud.png',category:'HEADPHONE'},
        {id: 9,name: 'KEYBOARD',imageurl: 'https://m.media-amazon.com/images/I/71hrbNjKqhL._AC_SL1500_.jpg',category:'KEYBOARD'},
        {id: 10,name: 'MOUSE',imageurl: 'https://www.vhv.rs/dpng/d/460-4603856_gaming-mouse-png-transparent-png.png',category:'MOUSE'},
        {id: 11,name: 'MONITORS',imageurl: 'https://images.samsung.com/is/image/samsung/p6pim/my/ls57cg952nexxs/gallery/my-odyssey-neo-g9-g95nc-ls57cg952nexxs-537965891?$650_519_PNG$',category:'MONITOR'},
        {id: 12,name:'SPEAKER',imageurl: "https://www.bhphotovideo.com/images/images1000x1000/creative_labs_51mf1680aa000_pebble_2_0_speakers_usb_1434945.jpg",category:'SPEAKER'},
        {id: 13,name:'UPS',imageurl: 'https://www.rackyrax.com/23551-thickbox_default/tripp-lite-smx1500lcdt-uninterruptible-power-supply-ups.jpg',category:'UPS'}
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
            <hr className="linedesign"/>
            <div className='Profiles-container'>
                {products}
            </div>
            <div className="heading">
                <h1 id="page-header">OTHER PRODUCTS</h1>
                <p id="itemsno">9 items</p>
            </div>
            <hr className="linedesign"/>
            <div className='Profiles-container'>
                {otherproducts}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Productpage;