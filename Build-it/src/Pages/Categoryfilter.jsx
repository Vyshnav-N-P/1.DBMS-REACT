import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link , useParams }   from "react-router-dom";
import Profile from "../components/Profile";


export default function categorypage(){

    const {category}=useParams();

    let products=[{
        id:1,
        category:"processors",
        name:"Laptop",
        price:1000,
        image:"",
        link:"/products/:category/1"
    },
    {id:2, category:"rams",name: "chaissakd",price:1000, image:""}
    ];


    return (
        <div>
            <Header />

            <div className="Page-container">
                <div className="heading">
                    <h1 id="page-header">{category.toUpperCase()}</h1>
                    <p id="itemsno"> items</p>
                </div>
                <hr />

                <Profile list={products.filter(product => product.category === category)}/>
            </div>

            <Footer />
        </div>
    )
};