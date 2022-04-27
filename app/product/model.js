var mongoose = require('mongoose');

let productScheme = mongoose.Schema({
    name: {
        type: String,
        require: "Nama Produk Harus diisi"
    },
    stock: {
        type: String,
        enum: ['ready', 'sold', 'pre-order'],
        default: 'ready'
    },
    nominals: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Nominal'
    },
    brands: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }

    
}, {timestamps : true})

module.exports = mongoose.model('Product', productScheme);