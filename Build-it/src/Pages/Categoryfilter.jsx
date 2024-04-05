import React,{useEffect,useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link , useParams, useLocation }   from "react-router-dom";
import Profile from "../components/Profile";
import axios from "axios";

export default function categorypage(){
    const [productset, setProductset]=useState([]);
    const {category}=useParams();
    const location = useLocation();
    let {pathname}=location;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products/:Category');
                if (response.status === 200) {
                    console.log(response.data);
                    setProductset(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);
    const products=productset.filter(product => product.category === category)
    
    // let products=[{
    //     id:1,
    //     category:"processors",
    //     name:"Laptop",
    //     price:1000,
    //     image:"",
    //     link:`/products/${category}/1`
    // },
    // {id:2, category:"rams",name: "chaissakd",price:1000, image:"",link:`/products/${category}/2`}
    // ];


    return (
        <div>
            <Header />

            <div className="Page-container">
                <div className="heading">
                    <h1 id="page-header">{category.toUpperCase()}</h1>
                    <p id="itemsno">{products.length} items</p>
                </div>
                <hr />

                <Profile list={products} url={pathname} identifier='id'/>
            </div>

            <Footer />
        </div>
    )
};