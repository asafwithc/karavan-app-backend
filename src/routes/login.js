var express = require('express');
var firebaseAuth = require("../middlewares/firebaseAuth");
var axios = require('axios');
var router = express.Router();

router.post('/', async (req, res, next) => {
    next();
});

module.exports = router;
