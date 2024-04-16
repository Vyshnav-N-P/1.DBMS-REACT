import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../components/loginpage.css';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import logo from  "C:/Users/vyshn/OneDrive/Pictures/logo.png";

function Loginpage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const {auth, setAuth}=useAuth();
    const Navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/Login-page", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            const accessToken = data.accessToken
            const user = data.user
            
            if (!response.ok) {
                throw new Error('Login failed');
            }
            setMessage(data.message);
            
            console.log(data);
            setAuth({accessToken, user});
            Navigate("/")
        } catch (err) {
            console.error('Error:', err);
            setError(err.message || 'Failed to log in. Please try again.');
        }
    };

    return (
        <div className='container'>
            <div className='imageContainer'>
                <img src={logo} alt="logo" />
            </div>
            <div className='DetailingContainer'>
            <form onSubmit={handleSubmit} className='formcontainer'>
                <h1>SIGN IN</h1>
                <div className='component'>
                    <label htmlFor="username"><strong>USERNAME</strong></label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" id="username" name='username' required />
                </div>
                <div className='component'>
                    <label htmlFor="password"><strong>PASSWORD</strong></label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name='password' required />
                </div>
                <button type='submit' id='loginbtn'>Log In</button>
            </form>
            {error && <p className="error">{error}</p>}
             
            <p>Don't have an account? </p>
            <Link to="/register-page">
            <button type='button' id='signupbtn'>Sign Up</button>
            </Link>

            </div>
          
        </div>
    );
}
export default Loginpage;