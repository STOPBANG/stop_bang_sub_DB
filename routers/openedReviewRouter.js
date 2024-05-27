const express = require('express')
const router = express.Router();
const openedReviewModel = require('../models/openedReviewModel.js');

router.get('/findAllById/:r_id', openedReviewModel.findAllById);
router.post('/findById', openedReviewModel.findById);
router.post('/create', openedReviewModel.create);
<<<<<<< Updated upstream
router.post('/delete', openedReviewModel.delete);
=======
// 리뷰 아이디로 삭제
router.post('/delte', openedReviewModel.delete);
>>>>>>> Stashed changes

module.exports = router