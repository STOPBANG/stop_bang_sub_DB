const OpenedReview = require('../database/models/tables/openedReview');

module.exports = {

  // 회원의 opened_review 모두 찾기
  findAllById: async (req, res) => {
    const r_id = req.params.r_id; // 입주민

    try {
      const opened_review = await OpenedReview.findAll({ where: {resident_r_id: r_id} });
      if(opened_review) {
        return res.json(opened_review);
      }
      return res.json({});
    } catch (error) {
      console.log('[error] sub DB : ', error);
      return res.redirect('/');
    }
  },

  // opened_review 찾기
  findById: async (req, res) => {
    const rv_id = req.body.rv_id; // 리뷰
    const r_id = req.body.r_id; // 입주민

    try {
      const opened_review = await OpenedReview.findAll({ where: {review_rv_id: rv_id, resident_r_id: r_id} });
      if(opened_review) {
        return res.json(opened_review);
      }
      return res.json({});
    } catch (error) {
      console.log('[error] sub DB : ', err);
      return res.redirect('/');
    }
  },

  // opened_review db에 추가하기 - 직접메시징
  
  create: async (req, res) => {
    const body = req.body;
    try {
      const opened_review = await OpenedReview.create({
        resident_r_id: body.r_id,
        review_rv_id: body.rv_id
      });
      if(opened_review) {
        return res.json(opened_review);
      }
      return res.json({});
    } catch (error) {
      console.log('[error] sub DB : ', error);
      return res.redirect('/');
    }
  },

  delete: async (req, res) => {
    const rv_id = req.body.rv_id;
    try {
      await Report.destroy({ where: {review_rv_id: rv_id} });
      return res.json({});
    } catch (error) {
      console.log('[error] sub DB - op_review(delete) : ', error);
      return res.redirect('/');
    }
  }
}