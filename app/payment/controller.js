const Payment = require('./model');
const Bank = require('../bank/model');

module.exports = {
    index: async(req, res) =>{
        try {
            res.render('admin/payment/view_payment');
        } catch (error) {
            
        }
    },
}