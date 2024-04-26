const express = require('express')
const router = express.Router();
const openedReviewRouter = require('../models/openedReviewModel.js');
const openedReviewModel = require('../models/openedReviewModel.js');

router.post('/delete', openedReviewModel.delete);