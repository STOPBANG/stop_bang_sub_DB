const express = require('express')
const router = express.Router();
const openedReviewModel = require('../models/openedReviewModel.js');

router.post('/findById', openedReviewModel.findById);
router.post('/create', openedReviewModel.create);

module.exports = router