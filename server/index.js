const express = require('express');
const app=  express()  ;
const cors = require('cors');
const pool = require('./db');
const bodyParser = require('body-parser');

//middleware
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

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

//Add to cart

app.post('/products/:category/:id', async (req, res) => {
   try {
    const id = req.params.id;
    const {qty}=req.body;
    console.log(req.body);

    const product= await pool.query("SELECT * FROM products WHERE id = $1",[id]);
    if (product.rows.length === 0) {
        res.status(404).json({message:"Product not found"});
    }
    
    await pool.query("insert into cart(productid , qty) values($1,$2)",[id,qty]);
    res.status(200).json({ message: "Product added to cart successfully" });
    }
    catch(err){
        res.status(500).json({ message: "Internal Server Error" });
    };
});

//loading Cart
app.get('/cart-page', async (req, res) => {
    try{
        const cartitems=await pool.query("SELECT cart.qty,products.* FROM cart INNER JOIN products ON cart.productid = products.id");
        if (cartitems.rows.length==0) {
            res.status(404).json({message:"Cart is empty"});
        };
        console.log(cartitems.rows);
        res.status(200).json(cartitems.rows);
    }
    catch(err){
        res.status(500).json({ message: "Internal Server Error" });
    };
});

//Loading Cart Items


//Loading Products 
app.get('/products/:category',async (req,res)=>{
    try {
        const products= await pool.query("SELECT * FROM products");
        
        res.status(200).json(products.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

//Load a Product
app.get('/products/:category/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const product= await pool.query("SELECT * FROM products WHERE id = $1",[id]);
        if (product.rows.length === 0) {
            res.status(404).json({message:"Product not found"});
        }
        
        res.status(200).json(product.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(5000,()=>{
    console.log("Server runnning on port 5000");
})