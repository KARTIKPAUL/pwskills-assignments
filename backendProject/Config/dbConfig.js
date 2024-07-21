const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB Connect successfully !! ${conn.connection.host}`);
    } catch (error) {
        console.log(`Mongo DB Connection failed !! , ${error}`);
    }
}

module.exports = connectDB;