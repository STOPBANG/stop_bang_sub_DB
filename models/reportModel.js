const Report = require('../database/models/tables/report');

module.exports = {
  delete: async (req, res) => {
    const r_id = req.body.r_id;
    try {
      await Report.destroy({ where: {r_id: r_id} });
      return res.json({});
    } catch (error) {
      return error;
    }
  }
}