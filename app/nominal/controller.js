
const { redirect } = require('express/lib/response');
const Nominal = require('./model');

module.exports = {
    index : async (req, res) =>{
        try {
            let nominal = await Nominal.find();



            res.render('admin/nominal/view_nominal',{
                nominal
            });
        } catch (error) {
            console.log(error)
        }
    },
    viewCreate: async ( req, res) =>{
        try {
            res.render('admin/nominal/create');
        } catch (error) {
            console.log(error);
        }
    },
    actionCreate: async (req, res) =>{
        try {
            const { value, price } = req.body;
            
            let nominal = await Nominal({
                value,
                price
            });

            await nominal.save();
            res.redirect('/nominal')
        } catch (error) {
            
        }
    },
    viewEdit: async(req, res) =>{
        try {
            const { id } = req.params;
            console.log( id);
           let nominal = await Nominal.findOne({
                _id: id
            });
            console.log(nominal)
            res.render('admin/nominal/edit',{
                nominal
            });
        } catch (error) {
            console.log(error)
        }
    },
    actionEdit: async(req, res) =>{
        try {
            const { id } = req.params;
            const { value, price} = req.body;

            await Nominal.findOneAndUpdate({
                _id: id
            },{
                value,
                price
            });
            res.redirect('/nominal');
        } catch (error) {
            
        }
    },
    actionDelete: async(req, res) =>{
        try {
            const  {id} = req.params;

            await Nominal.findOneAndRemove({
                _id: id
            });

            res.redirect('/nominal')
        } catch (error) {
            
        }
    }
}