const express = require('express')
const router = express.Router();
const reportModel = require('../models/reportModel.js');

// 리뷰 아이디로 신고 테이블에서 검색
<<<<<<< Updated upstream
router.get('/findAllByID/:rv_id', reportModel.findAllById);
// 리뷰 아이디, 신고자 이름으로 검색
router.get('/findOne/:rv_id/:reporter', reportModel.findOne);
// sys_regno로 검색
router.get('/findAllBySysRegno/:sys_regno', reportModel.findAllBySysRegno);
// 신고 삭제
router.post('/delete', reportModel.delete);
// 신고 생성
router.post('/create', reportModel.create);
// 모든 신고 데이터 가져오기
router.get('/getAllReports', reportModel.findAll);
=======
router.get('/findAllByID:/rv_id', reportModel.findAllById);
// 리뷰 아이디, 신고자 이름으로 검색
router.get('/findOne/:rv_id/:reporter', reportModel.findOne);
// 신고 삭제
router.post('/delete', reportModel.delete);
// 신고 테이블의 모든 데이터 가져오기

>>>>>>> Stashed changes

module.exports = router