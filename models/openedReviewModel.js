const OpenedReview = require('../database/models/tables/openedReview');

module.exports = {
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

  // opened_review db에 추가하기
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
      console.log('[error] sub DB : ', err);
      return res.redirect('/');
    }
  }
}