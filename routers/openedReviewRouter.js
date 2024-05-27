const express = require('express')
const router = express.Router();
const openedReviewModel = require('../models/openedReviewModel.js');

router.get('/findAllById/:r_id', openedReviewModel.findAllById);
router.post('/findById', openedReviewModel.findById);
router.post('/create', openedReviewModel.create);
router.post('/delete', openedReviewModel.delete);

module.exports = router