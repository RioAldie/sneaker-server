var express = require('express');
var router = express.Router();
const {index, viewCreate, actionCreate, viewEdit, actionEdit, actionDelete} = require('./controller.js');
/* GET home page. */
router.get('/', index);
router.get('/create', viewCreate);
router.post('/create', actionCreate);
router.get('/edit/:id', viewEdit);
router.post('/edit/:id', actionEdit);
router.get('/delete/:id', actionDelete);

module.exports = router;
