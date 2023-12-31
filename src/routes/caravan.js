var express = require('express');
var router = express.Router();

const caravanController = require('../controllers/caravanController');

router.get('/get-all-caravans', caravanController.getAllCaravans);

router.get('/get-caravans-of-user', caravanController.getCaravansOfUser);

module.exports = router;
