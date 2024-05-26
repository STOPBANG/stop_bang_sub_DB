const Bookmark = require('../database/models/tables/bookmark');

module.exports = {
  // id는 resident_r_id
  findALLById: async (req, res) => {
    const r_id = req.params.r_id;
    try {
      const bookmark = await Bookmark.findAll({
        where: {
          resident_r_id: r_id
        }
      });
      if (bookmark) {
        return res.json(bookmark);
      }
      return res.json({});
    } catch (error) {
      console.log('[error] sub DB : ', error);
      return res.redirect('/');
    }
  },

  // id는 ra_regno, resident_r_id
  findALLByIdnRegno: async (req, res) => {
    try {
      const bookmark = await Bookmark.findAll({
        where: {
          agentList_ra_regno: req.params.sys_regno,
          resident_r_id: req.params.r_id
        }
      });
      if (bookmark) {
        return res.json(bookmark);
      }
      return res.json({});
    } catch (error) {
        console.log('[error] sub DB : ', error);
        return res.redirect('/');
    }
  },

  // 북마크 업데이트 및 삭제
  create: async (req, res) => {
    const body = req.body;
    try {
      const bookmark = await Bookmark.create({
          agentList_ra_regno: body.sys_regno,
          resident_r_id: body.r_id
        }
      );
      return res.json(bookmark);
    } catch (error) {
        console.log('[error] sub DB: ', error);
        return res.redirect('/');
    }
  },

  // 북마크 삭제
  delete: async (req, res) => {
    const body = req.body;
    try {
      await Bookmark.destroy({ 
        where: { 
          agentList_ra_regno: body.sys_regno,
          resident_r_id: body.r_id
        }
       });
      return res.json({});
    } catch (error) {
      console.log('[error] sub DB : ', error);
      return res.redirect('/');
    }

  }
}