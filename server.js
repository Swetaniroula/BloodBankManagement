const express = require('express');
const dotenv = require('dotenv');
const colors =require('colors');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require("./config/db");

const path =require('path');


//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
//routes
//1 test route
app.use('/api/v1/test',require("./routes/testRoutes"));
app.use('/api/v1/auth',require("./routes/authRoutes"));
app.use('/api/v1/inventory',require("./routes/inventoryRoutes"));

//static Folder
app.use(express.static(path.join(__dirname,'./client/build')))

//static Routes
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
});

//port
const PORT = process.env.PORT || 7000;

//listen
app.listen(PORT,() => {
    console.log(`Node server Running ${process.env.DEV_MODE} ModeON Port ${process.env.Port}`.bgBlue.white);
});