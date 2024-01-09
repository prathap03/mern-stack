const mongoose = require('mongoose');

const Order = new mongoose.Schema({
    status: {type: String, required: true},
    client_id: {type: String, required: true, default: ""},
},{
    collection: 'orders'
})

const model = mongoose.model('Orders', Order);

module.exports = model;