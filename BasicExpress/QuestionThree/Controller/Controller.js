const express = require('express');

const home = (req,res) => {
    res.send(`${JSON.stringify({msg: 'I am HomePage'})}`)
}

const about = (req,res) => {
    res.send(`${JSON.stringify({msg: 'This is about page'})}`)
}

const contact = (req,res) => {
    res.send(`${JSON.stringify({msg: 'This is contact page'})}`)
}

module.exports = {
    home,
    about,
    contact
}