const mongoose = require('mongoose');

const Order = new mongoose.Schema({
    status: {type: String, required: true},
},{
    collection: 'orders'
})

const model = mongoose.model('Orders', Order);

module.exports = model;