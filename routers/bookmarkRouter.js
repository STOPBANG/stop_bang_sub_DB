const express = require('express')
const router = express.Router();
const bookmarkModel = require('../models/bookmarkModel.js');

// 북마크 업데이트
router.put('/update', bookmarkModel.update);
// 북마크 삭제
router.post('/delete', bookmarkModel.delete);

module.exports = router