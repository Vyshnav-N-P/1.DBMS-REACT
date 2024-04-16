import React from "react";
import "../components/buildlink.css";
import { Link } from "react-router-dom";

export default function Buildlink() {
  return (
    <div className="buildlink-qs">
      <div className="textelement">
        <p id="heading1">WANT TO</p>
        <p id="heading2">BUILD YOUR OWN PC ?</p>
      </div>
      <div className="btncontainer">
        <Link to="/products">
          <a id="buildbtn" className="buildbtn">
            BUILD
          </a>
        </Link>
      </div>
    </div>
  );
}
