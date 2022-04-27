const Product = require('./model');
const Nominal = require('../nominal/model');
const Brand = require('../brand/model');
const Category = require('../category/model');

module.exports = {
    index: async( req, res) =>{
        try {
            let product = await Product.find().populate('nominals').populate('brands');
            console.log('product', product[0].nominals)
            res.render('admin/product/view_product',{
                product
            });
        } catch (error) {
            console.log(error);
        }
    },
    viewCreate: async(req, res) =>{
        try {

            let nominals = await Nominal.find();
            let brands = await Brand.find();
            let categories = await Category.find();
            res.render('admin/product/create',{
                nominals,
                brands,
                categories
            });
        } catch (error) {
            console.log(error)
        }
    },
    actionCreate: async(req, res) =>{
        try {
            const { nominals, name, brands} = req.body;
            
            let product = new Product({
                nominals,
                name,
                brands
            });
            await product.save();
            
            res.redirect('/product');
        } catch (error) {
            console.log(error)
        }
    },
    actionDelete: async(req, res) =>{
        try {
            const { id } = req.params;

            await Product.findOneAndRemove({
                _id : id
            });

            res.redirect('/product');
        } catch (error) {
            console.log(error)
        }
    },
    viewEdit: async(req, res) =>{
        try {
            const { id } = req.params;
            const nominals = await Nominal.find();
            const brands = await Brand.find();

            let product = await Product.findOne({ _id: id}).populate('nominals').populate('brands');

            res.render('admin/product/edit',{
                nominals,
                brands,
                product
            })
        } catch (error) {
            console.log(error)
        }
    },
    actionEdit: async(req, res) =>{
        try {
            const {id} = req.params;
            const {nominals, brands} = req.body;

            await Product.findOneAndUpdate({
                _id: id
            },{
                nominals,
                brands
            });

            res.redirect('/product');
        } catch (error) {
            
        }
    },
    actionStatus: async( req, res)=>{
        try {
            const {id} = req.params;
            let product = await Product.findOne({_id: id});
            let stock = product.stock === 'ready' ? 'sold' : "ready";
            
            console.log(stock)
            product = await Product.findOneAndUpdate({
                _id: id
            },{
                stock
            });
            req.flash("alertMessage",`Berhasil Update Status product`);
            req.flash("alertStatus", 'success');
            res.redirect('/product')
        } catch (error) {
            req.flash("alertMessage",`${error.message}`);
            req.flash("alertMessage", 'danger');
            res.redirect("/product");
        }
    }
}