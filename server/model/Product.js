const mongoose = require('mongoose');

const ProductModel = mongoose.Schema(
    {
        "id": {
            require: true,
            type: Number,
            unique: true,
            index: true // for better performance
        },
        "name": {
            require: true,
            type: String
        },
        "currency": {
            require: true,
            type: String
        },
        "price": {
            require: true,
            type: Number
        },
        "image": {
            require: true,
            type: String
        }
    },
    { versionKey: false }
)

const product = mongoose.model('product', ProductModel);
module.exports = product;