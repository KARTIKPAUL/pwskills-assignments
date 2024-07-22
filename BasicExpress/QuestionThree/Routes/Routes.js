const express = require('express');
const { home, about, contact } = require('../Controller/Controller.js');
const Routes = express.Router();

Routes.get('/',home);
Routes.get('/about',about)
Routes.get('/contact',contact)

module.exports = Routes;