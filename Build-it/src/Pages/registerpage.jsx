import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/loginpage.css";
import { useNavigate } from "react-router-dom";
import logo from "C:/Users/vyshn/OneDrive/Pictures/logo.png";

export default function register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register-page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Register failed");
      } else if (response.ok) {
        setMessage(data.message);
        Navigate("/Login-page");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to log in. Please try again.");
    }
  };
  return (
    <div className="container">
      <div className="imageContainer">
        <img src={logo} alt="logo" />
      </div>
      <div className="DetailingContainer">
      <h1>WELCOME TO BUILDIT</h1>
        <form onSubmit={handleSubmit} className="formcontainer">
          <div className="component">
            <label htmlFor="username">
            <strong>USERNAME</strong>
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              id="username"
              name="username"
            />
          </div>
          <div className="component">
            <label htmlFor="email">
            <strong>EMAIL</strong>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              id="email"
              name="email"
            />
          </div>
          <div className="component">
            <label htmlFor="password">
            <strong>PASSWORD</strong>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              required
            />
          </div>

          <button type="submit" id="signupbtn">
            Sign Up
          </button>
        </form>
        {error && <p className="res-mssg">{error}</p>}
        {message && <p className="res-mssg">{message}</p>}
        <p>Already have an account !</p>
        <Link to="/login-page" id="loginbtn">
          Log In
        </Link>
      </div>
    </div>
  );
}
