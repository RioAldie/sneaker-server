var express = require('express');
var router = express.Router();

const { index, viewCreate, actionCreate, actionDelete, viewEdit, actionEdit, actionStatus } = require('./controller');

router.get('/', index);
router.get('/create', viewCreate);
router.post('/create', actionCreate );
router.post('/delete/:id', actionDelete);
router.get('/edit/:id', viewEdit);
router.post('/edit/:id', actionEdit);
router.post('/status/:id', actionStatus)

module.exports = router;