const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, dropDups: true},
    password: {type: String, required: true},
    isMember: {type: Boolean, default: false},
},{
    collection: 'user-data'
})

const model = mongoose.model('UserData', User);

module.exports = model;