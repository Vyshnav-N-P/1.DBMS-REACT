import React from "react";
import "../components/profile.css";
import { Link,Navigate } from "react-router-dom";

export default function Profile({ list ,url,identifier}) {
  return (
    <div className="Profiles-container">
      {list.map((item) => (
        <Link to={`${url}/${item[identifier]}`} className="linking" key={item.id}>
          <div className="brand-profile">
            <img src={item.imageurl} alt={`Image of the ${item.name}`} />            
          </div>
          <div className="profilenamecontainer">
            <p>
              <strong>{item.name}</strong>
            </p>
            </div>
        </Link>
      ))}
    </div>
  );
}
