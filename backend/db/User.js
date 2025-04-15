const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true,
        unic: true
    },
});
module.exports = mongoose.model('user', Schema)