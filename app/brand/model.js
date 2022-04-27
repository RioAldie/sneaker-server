const mongoose = require('mongoose');

let brandSchema = mongoose.Schema({
    name: {
        type: String,
        require: "Nama Brand Harus diisi"
    },
    location: {
        type: String,
        require: "Lokasi Brand Harus diisi"
    }
});

module.exports =  mongoose.model('Brand', brandSchema);