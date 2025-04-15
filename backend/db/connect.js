const mongoose = require('mongoose');
const connectionUrl = process?.env?.MONGO_CONNECT_URL
const connectDB = async () => {
    try {
        const options = {autoCreate:true}
        const conn = await mongoose.connect(connectionUrl, options);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
