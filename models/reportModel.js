const Report = require('../database/models/tables/report');

module.exports = {
  findAll: async (req, res) => {
    try {
      const report = await Report.findAll();
      if (report) {
        return res.json(report);
      }
    } catch(error) {
      console.log('[error] sub DB - report(findAll) : ', error);
      return res.redirect('/');
    }
  },

  findAllById: async (req, res) => {
    const rv_id = req.params.rv_id;
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
      console.log('[error] sub DB - report(findAllById) : ', error);
      return res.redirect('/');
    }
  },

  findOne: async (req, res) => {
    const params = req.params;
    try {
      const report = await Report.findOne({
        where: {
          repo_rv_id: params.rv_id,
          reporter: params.reporter
        }
      });
      if (report) {
        return res.json(report);
      }
    } catch(error) {
      console.log('[error] sub DB - report(findOne) : ', error);
      return res.redirect('/');
    }
  },

  findAllBySysRegno: async (req, res) => {
    const params = req.params;
    try {
      const report = await Report.findAll({
        where: {
          sys_regno: params.sys_regno
        }
      });
      if (report) {
        return res.json(report);
      }
    } catch(error) {
      console.log('[error] sub DB - report(findAllBySysRegno) : ', error);
      return res.redirect('/');
    }
  },

  create: async (req, res) => {
    const repo_rv_id = req.body.rv_id;
    const reporter = req.body.reporter;
    const reportee = req.body.reportee;
    const reason = req.body.reason;

    try {
      await Report.create({
        repo_rv_id: repo_rv_id,
        reporter: reporter,
        reportee: reportee,
        reason: reason
      });

      return res.json({});
    } catch (error) {
      console.log('[error] sub DB - report(create) : ', error);
      return res.redirect('/');
    }
  },

  delete: async (req, res) => {
    const rv_id = req.body.rv_id;
    try {
      await Report.destroy({ where: {rv_id: rv_id} });
      return res.json({});
    } catch (error) {
      console.log('[error] sub DB - report(delete) : ', error);
      return res.redirect('/');
    }
  }
}