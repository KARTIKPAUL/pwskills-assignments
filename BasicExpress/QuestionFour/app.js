const express = require('express');
const app = express();

app.get('/random',(req,res) => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    res.send(`Random Number is : ${randomNumber}`)
})

module.exports = app;