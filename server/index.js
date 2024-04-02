const express = require('express');
const app=  express()  ;
const cors = require('cors');
const pool = require('./db');
const bodyParser = require('body-parser');

//middleware
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

// const users = [
//     { username: 'user', password: 'pass' },
//     { username: 'user2', password: 'password2' }
// ];

//Routes

//login
app.post("/Login-page", async(req,res)=>{
    try {
        const { username, password } = req.body;
        console.log(req.body);

        const user= await pool.query("SELECT * FROM accounts WHERE username =$1 ",[username]);
        if (user.rows.length === 0){
            res.status(401).json({message:"Invalid username or password"});
        };
        
        const storedPassword = user.rows[0].password;

        if (password === storedPassword) {
            return res.status(200).json({ message: "Login Successful" });
            
        } else {
            return res.status(401).json({ message: "Invalid username or password" });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

//register 
app.post("/Register-page", async(req,res)=>{
    try{
        const {username,password,email} =req.body;
        console.log(req.body);

        const userExists=await pool.query("SELECT * FROM accounts WHERE username = $1 OR email = $2",[username,email]);
        if (userExists.rows.length > 0) {
            res.status(400).json({message:"User already exists"});
        }

        const newuser=await pool.query("insert into accounts(password , email ,username) values ($1,$2,$3)",[password,email,username]);
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        // Handling errors
        console.log(err.message);
        // Sending an error response
        res.status(500).send("Error registering user");
    }
});
app.listen(5000,()=>{
    console.log("Server runnning on port 5000");
})