import React from "react";
import "../components/Footer.css";

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
          <li><a href="#HOME">Home</a></li>
          <li><a href="#HOME">About</a></li>
          <li><a href="#HOME">Contact Us</a></li>
          <li><a href="#HOME">Our Team</a></li>
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