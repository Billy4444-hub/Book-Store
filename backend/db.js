const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(MONGO_URI, {
    dbName: DB_NAME,
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});