const Report = require('../database/models/tables/report');
const { findALLById } = require('./bookmarkModel');

module.exports = {
  findAllById: async (req, res) => {
    const rv_id = req.body.rv_id;
    try {
      const report = await Report.findAll({
        where: {
          repo_rv_id: rv_id
        }
      });
      if (report) {
        return res.json(report);
      }
    } catch(error) {
      console.log('[error] sub DB - report : ', error);
      return res.redirect('/');
    }
  },

  findOne: async (req, res) => {
    const body = req.body;
    try {
      const report = await Report.findOne({
        where: {
          repo_rv_id: body.rv_id,
          reporter: body.reporter
        }
      });
      if (report) {
        return res.json(report);
      }
    } catch(error) {
      console.log('[error] sub DB - report : ', error);
      return res.redirect('/');
    }
  },


  delete: async (req, res) => {
    const r_id = req.body.r_id;
    try {
      await Report.destroy({ where: {r_id: r_id} });
      return res.json({});
    } catch (error) {
      console.log('[error] sub DB - report : ', error);
      return res.redirect('/');
    }
  }
}