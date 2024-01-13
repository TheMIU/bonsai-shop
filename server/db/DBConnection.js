const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;

const db = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URL);
        console.info(`mongodb connected to ${conn.connection.host}`);
    } catch (error) {
        console.error("Mongo DB connect Error ", error);
    }
}

module.exports = db;