const express = require('express')
const router = express.Router();
const bookmarkModel = require('../models/bookmarkModel.js');

// resident_r_id로 북마크 검색
router.get('/findAllById/:r_id', bookmarkModel.findALLById);
// resident_r_id, ra_regno로 북마크 검색
router.get('/findAllByIdnRegno/:r_id/:ra_regno',bookmarkModel.findALLByIdnRegno);
// 북마크 업데이트
router.put('/update', bookmarkModel.update);
// 북마크 삭제
router.post('/delete', bookmarkModel.delete);

module.exports = router