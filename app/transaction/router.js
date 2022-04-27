var express = require('express');
var router = express.Router();

const {index, actionStatus} = require('./controller');

router.get('/', index);
router.post('/status/:id', actionStatus);

module.exports = router;