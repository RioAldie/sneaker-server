const mongoose =  require('mongoose');

let transactionScheme = mongoose.Schema({
    historyProduct: {
        name: {
            type: String,
            require: [true,"Nama Produk Harus diisi"]
        },
        categories: {
            type: String,
            require: [true, "Kategori Harus diisi"]
        },
        price: {
            type: String,
            require: [true,"Harga Produk Harus diisi"]
        },
        brand: {
            type: String,
            require: [true,"Nama Produk Harus diisi"]
        },
        value: {
            type: String,
            require: [true, "Grade Harus diisi"]
        }
    },
    historyPayment:{
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
            require: "Tipe Pembayaran harus diisi"
        }
     
    },
    name: {
        type: String,
        require: [true, "Nama Harus diisi"]
    },
    email: {
        type: String,
        require: 'Email Harus diIsi'
    },
    phoneNumber: {
        type: String,
        require: 'Nomor Telepon Harus diisi'
    },
    alamat: {
        provinsi: {
            type: String,
            require: 'Provinsi Harus diisi'
        },
        kota: {
            type: String,
            require: 'Kota Harus diisi'
        },
        kecamatan: {
            type: String,
            require: 'Kecamatan Harus diisi'
        },
        desa:{
            type: String,
            require: 'Desa harus diisi'
        }
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    status: {
        type: String,
        enum: ['pending', 'success', 'failed'],
        default: 'pending'
    },
    quantity:{
        type: Number,
        require: ['Jumlah Barang harus diisi']
    }

});

module.exports = mongoose.model('Transaction', transactionScheme);