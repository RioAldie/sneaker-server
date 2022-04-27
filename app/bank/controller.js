const res = require('express/lib/response');
const Bank = require('./model');

module.exports = {
    index: async(req, res)=>{
        try {
            

            let bank = await Bank.find();
            res.render('admin/bank/view_bank',{
                bank
            });
        } catch (error) {
            console.log(error);
        }
    },
    viewCreate : async(req, res) =>{
        try {
            res.render('admin/bank/create');
        } catch (error) {
            console.log(error);
        }
    },
    actionCreate: async(req, res) =>{
        try {
            const { name, bankName, nomorRekening } = req.body;

            let bank = await Bank({
                name,
                bankName,
                nomorRekening
            });
            await bank.save();

            res.redirect('/bank')
        } catch (error) {
            console.log(error);
        }
    },
    viewEdit: async( req, res) =>{
        try {
            const { id } =  req.params;

            let bank = await Bank.findOne({
                _id: id
            });

            res.render('admin/bank/edit',{
                bank
            })
        } catch (error) {
            
        }
    },
    actionEdit: async( req, res) =>{
        try {
            const { id } = req.params;
            const { name, bankName, nomorRekening} = req.body;

            await Bank.findOneAndUpdate({
                _id: id
            },{
                name,
                bankName,
                nomorRekening
            });
            res.redirect('/bank');
        } catch (error) {
            console.log(error);
        }
    },
    actionDelete: async( req, res) =>{
        try {
            const { id } = req.params;

            await Bank.findOneAndRemove({
                _id: id
            });

            res.redirect('/bank')
        } catch (error) {
            
        }
    }
}