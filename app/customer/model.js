var mongoose = require('mongoose');

let customerSchema = mongoose.Schema({
    name: {
        type: String,
        require: 'Nama pengguna harus disii'
    },
    password: {
        type: String,
        require: 'Password harus diisi',
    },
    email: {
        type: String,
        require: 'Email Harus diIsi'
    },
    role: {
        enum: ['admin' , 'user'],
        default: ['user']
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
    }
},{timestamps : true});

module.exports = mongoose.model('Customer', customerSchema)