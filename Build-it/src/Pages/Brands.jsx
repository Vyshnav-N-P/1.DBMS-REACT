import React from 'react';
import '../components/profile.css'
import Profile from '../components/Profile';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Brands(){
    const brandlist = [
        { id: 0, name: 'AMD', imgurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/1920px-AMD_Logo.svg.png' },
        { id: 1, name: 'INTEL', imgurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/2560px-Intel_logo_%282006-2020%29.svg.png' },
        { id: 2, name: 'NVIDIA', imgurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NVIDIA_logo.svg/1920px-NVIDIA_logo.svg.png' },
        { id: 3, name: 'MSI', imgurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Micro-Star_International_logo.svg/1920px-Micro-Star_International_logo.svg.png' },
        { id: 4, name: 'GIGABYTE', imgurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Gigabyte_Technology_logo_20080107.svg/1920px-Gigabyte_Technology_logo_20080107.svg.png' },
        { id: 5, name: 'RAZER', imgurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Razer_wordmark.svg/1920px-Razer_wordmark.svg.png' },
    ];

    const brands = <Profile list={brandlist}/>;
    return(
        <>
        <Header />
        <div className="Page-container">
            <div className="heading">
            <h1 id="page-header">BRANDS</h1>
            <p id="itemsno">12 items</p>

            </div>
            <hr />
            <div className='Profiles-container'>
                {brands}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Brands;