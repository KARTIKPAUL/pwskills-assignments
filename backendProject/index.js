const app = require('./app.js');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.listen(PORT , () =>{
    console.log(`App listen at http://localhost:${PORT}`);
})