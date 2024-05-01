const express = require('express')
const router = express.Router();
const reportModel = require('../models/reportModel.js');

// 리뷰 아이디로 신고 테이블에서 검색
router.get('findAllByID:/rv_id', reportModel.findAllById);
// 리뷰 아이디, 신고자 이름으로 검색
router.get('findOne/:rv_id/:reporter', reportModel.findOne);
// 신고 삭제
router.post('/delete', reportModel.delete);
// 신고 생성
router.post('/create', reportModel.create);

module.exports = router