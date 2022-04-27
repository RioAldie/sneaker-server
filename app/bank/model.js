var mongoose = require('mongoose');

let bankScheme = mongoose.Schema({
    name:{
        type: String,
        require: "Nama Pemilik Rekening Harus diisi"
    },
    bankName: {
        type: String,
        require: "Nama Bank Harus diisi"
    },
    nomorRekening: {
        type: String,
        require: "Nomor Rekening harus diisi"
    },
    type: {
        type: String,
        require: "Tipe Pembayaran Harus diisi"
    }
});

module.exports = mongoose.model('Bank', bankScheme);