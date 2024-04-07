import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams, useLocation } from "react-router-dom";
import Profile from "../components/Profile";
import axios from "axios";

export default function CategoryPage() {
    const [productset, setProductset] = useState([]);
    const { category, brandname } = useParams();
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (category) {
                    response = await axios.get(`http://localhost:5000/products/${category}`);
                } else if (brandname) {
                    response = await axios.get(`http://localhost:5000/brands/${brandname}`);
                }
                if (response.status === 200) {
                    console.log(response.data);
                    setProductset(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category, brandname]);

    // const filteredProducts = category
    //     ? productset.filter(product => product.category === category)
    //     : productset.filter(product => product.brand === brandname);

    return (
        <div>
            <Header />
            <div className="Page-container">
                <div className="heading">
                    <h1 id="page-header">{category ? category.toUpperCase() : brandname ? brandname.toUpperCase() : 'Not Found'}</h1>
                    <p id="itemsno">{productset.length} items</p>
                </div>
                <hr />
                <Profile list={productset} url={pathname} identifier='id' />
            </div>
            <Footer />
        </div>
    );
}
