const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/dbConfig.js');
const authRouter = require('./Routes/authRoutes.js');



//Initializa App
const app = express();

//Database Connection
connectDB();


//MiddleWares
app.use(express.json());
app.use(cors());

//Trial 
app.use('/', authRouter);

app.get('/',(req,res) =>{
    res.send("Hello Backend");
})


module.exports = app;