import React from "react";
import "../components/Footer.css";
import {Link} from 'react-router-dom';

function Footer(){
    return(
    <div className="footer">
    <div className="footercontainer">
      <div className="socials">
        <a href="#HOME"><i className="fab fa-instagram"></i></a>
        <a href="#HOME"><i className="fab fa-twitter"></i></a>
        <a href="#HOME"><i className="fab fa-youtube"></i></a>
      </div>
      <div className="fnav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#HOME">About</a></li>
          <li><a href="#HOME" onClick={()=>{alert("Email us your queries in one of the following mails .\nvyshnav.potti@christuniversity.in\nrohit.b@christuniversity.in\namal.k@christuniversity.in\nnandagopal.b@christuniversity.in")}}>Contact Us</a></li>
          <li><a href="#HOME" onClick={()=>{alert("Vyshnav \nRohit \nNandu \nAmal")}}>Our Team</a></li>
        </ul>
      </div>
      <div className="fbottom">
        <p>Copyright &copy; 2023; Designed by <span className="designer">ravn</span></p>
      </div>
    </div>
    </div>
    );
}

export default Footer;