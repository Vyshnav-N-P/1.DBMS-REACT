import React from "react";
import "../components/profile.css";
import { Link,Navigate } from "react-router-dom";

export default function Profile({ list }) {
  return (
    <div className="Profiles-container">
      {list.map((item) => (
        <Link to={item.link} className="linking" key={item.id}>
          <div className="brand-profile">
            <img src={item.imgurl} alt={`Image of the ${item.name}`} />
            <p>
              <strong>{item.name}</strong>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
