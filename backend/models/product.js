const mongoose = require('mongoose')
const Schema = mongoose.Schema;

newSchema = new Schema({
    name: String,
    price: String,
    stock: String,
    description: String,
    catalog: String
})

module.exports = mongoose.model('User', newSchema)