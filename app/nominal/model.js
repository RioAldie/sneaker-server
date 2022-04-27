const mongoose =  require('mongoose');

let nominalSchema = mongoose.Schema({
    value: {
        type: String,
        require: "Value Harus diisi"
    },
    price: {
        type: Number,
        require: "Harga Harus diisi"
    }
});

module.exports = mongoose.model('Nominal', nominalSchema);