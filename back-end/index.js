import express from "express";
import cors from "cors";

import products from "./product.js";

const app = express();

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Welcome to our online shop API...")
});

app.get("/products",(req,res)=>{
    res.send(products)
});

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server running on port ${port}`))