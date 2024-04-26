const Report = require('../database/models/tables/report');

module.exports = {
  deleteReport: async (req, res) => {
    const r_id = req.body.r_id;
    try {
      await Report.destroy({ where: {r_id: report_id} });
      return res.json({});
    } catch (error) {
      return error;
    }
  }
}