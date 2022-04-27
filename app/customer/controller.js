const Customer = require('./model');

module.exports = {
    index: async (req, res) =>{
        try {

            let customer = await Customer.find();
          
            res.render('admin/customer/view_customer',{
                customer
            });
        } catch (error) {
            console.log(error);
        }
    },
    viewCreate: async (req, res) =>{
        try {
            res.render('admin/customer/create');
        } catch (error) {
            console.log(error);
        }
    },
    actionCreate: async( req, res) =>{
        try {
            const {name, password, email, phoneNumber, provinsi, kota,kecamatan, desa} = req.body;

            let customer = await Customer({
                name,
                password,
                email,
                phoneNumber,
                alamat: {
                    provinsi,
                    kota,
                    kecamatan,
                    desa
                }
            });
            await customer.save();

            res.redirect('/customer');
        } catch (error) {
            console.log(error);
        }
    },
    actionDelete: async (req, res) =>{
        const { id } = req.params;

        await Customer.findOneAndRemove({
            _id : id
        })
    }
}