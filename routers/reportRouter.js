const express = require('express')
const router = express.Router();
const reportModel = require('../models/reportModel.js');

// 신고 삭제
router.post('/delete', reportModel.delete);

module.exports = router