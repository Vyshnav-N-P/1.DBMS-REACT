import React from "react";
import '../components/searchbar.css'

export default function Searchbar(){
    return(
        <div className="searchbar-container">
            <form className="searchbar-form">
                <input className="searchbar-input" type="search" placeholder="Search..."/>
                <button className="searchbar-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    )
}