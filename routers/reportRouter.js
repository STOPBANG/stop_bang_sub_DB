const express = require('express')
const router = express.Router();
const reportModel = require('../models/reportModel.js');

router.get('/findAllByID/:rv_id', reportModel.findAllById);
// 리뷰 아이디, 신고자 이름으로 검색
router.get('/findOne/:rv_id/:reporter', reportModel.findOne);
// 신고자 이름으로 검색
router.get('/findAll/:reporter', reportModel.findAllByReporter);
// sys_regno로 검색
router.get('/findAllBySysRegno/:sys_regno', reportModel.findAllBySysRegno);
// 신고 삭제
router.post('/delete', reportModel.delete);
// 신고 생성
router.post('/create', reportModel.create);
// 모든 신고 데이터 가져오기
router.get('/getAllReports', reportModel.findAll);

module.exports = router