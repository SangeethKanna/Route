const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const data = require("./data/product.json");
const favicon = require("serve-favicon");
const path = require("path"); 

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(cors());

app.use(express.static(__dirname + "/public"));

app.get('/product/:id' , (req,res) =>{
    //res.send(`get request is sending on port ${PORT}`);
    console.log(req.params.id);
    let user = Number(req.params.id);
    console.log(user);
    console.log(data[user]);
    res.send(data[user]);
});

app
    .route("/products")  
    .get((req,res) =>{
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);    
    res.json(data);
    })
    .post((req,res) =>{
        console.log(req.body);
        res.send(req.body);
        })
    .put((req,res) =>{
    res.send(`put request is sending on port ${PORT}`);
    })
    .delete((req,res) =>{
    res.send(`delete request is sending on port ${PORT}`);
    })

app.listen(5000, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));
