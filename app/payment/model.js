const mongoose = require('mongoose');

let paymentScheme = mongoose.Schema({
    paymentName: {
        type: String,
        require: 'Metode Pembayaran Harus diisi'
    },
    nameUser:{
        type: String,
        require: 'Masukan Nama User'
    },
    idAccount:{
        type: String,
        require: 'Masukan Id Anda'
    },
    phoneNumber:{
        type: Number,
        require: "Nomor Telepon harus diisi"
    },
    banks:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bank'
    }

})

module.exports = mongoose.model('Payment', paymentScheme);