const express = require('express')
const router = express.Router();
const reportModel = require('../models/reportModel.js');

router.post('/deleteReport', reportModel.deleteReport);

module.exports = router