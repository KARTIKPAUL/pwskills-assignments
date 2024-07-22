const express = require('express');
const app = express();

//Middleware
app.use(express.json());

let counter = 0;
app.get('/',(req,res) => {
    res.json({ Counter: counter });
})
//Increment
app.post('/increment',(req,res) => {
    counter++;
    res.json({ Counter: counter });
})
//Decrement
app.post('/decrement',(req,res) => {
    counter--;
    res.json({ Counter: counter });
})
module.exports = app;