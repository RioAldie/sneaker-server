const Transaction = require('./model');

module.exports ={
    index: async(req, res) =>{
        try {
            let transaction = await Transaction.find().populate('customer');
           
            res.render('admin/transaction/view_transaction',{
                transaction
            });
        } catch (error) {
            console.log(error);
        }
        
    },
    actionStatus: async(req,res) =>{
        try {
            const {id}  = req.params;
            const{ status } = req.query;
            await Transaction.findByIdAndUpdate({
                _id: id
            },{
                status
            });
            res.redirect('/transaction')
        } catch (error) {
            
        }
    }
}