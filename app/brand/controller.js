const Brand = require('./model');

module.exports = {
    index: async(req, res) => {
        try {
            
            let brand = await Brand.find();

            res.render('admin/brand/view_brand',{
                brand
            });
        } catch (error) {
            console.log(error)
        }
    },
    viewCreate: async(req, res) =>{
        try {
            res.render('admin/brand/create');
        } catch (error) {
            console.log(error);
        }
    },
    actionCreate: async(req, res) =>{
        try {
            const { name , location} = req.body;

            let brand = await Brand({
                name,
                location
            });

            await brand.save();

            res.redirect('/brand');
            
        } catch (error) {
            
        }
    },
    viewEdit: async(req, res) =>{
        try {
            const { id } = req.params;

            let brand = await Brand.findOne({
                _id: id
            });

            res.render('admin/brand/edit',{
                brand
            });
        } catch (error) {
            console.log(error)
        }
    },
    actionEdit: async(req, res) =>{
        try {
            const { name, location} = req.body;
            const { id } = req.params;

            await Brand.findOneAndUpdate({
                _id: id
            },{
                name,
                location
            });

            res.redirect('/brand');

        } catch (error) {
            
        }
    },
    actionDelete: async(req, res) =>{
        try {
            const { id } = req.params;

            await Brand.findOneAndRemove({
                _id : id
            });
            res.redirect('/brand');
        } catch (error) {
            
        }
    }
}