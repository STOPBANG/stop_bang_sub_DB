const Sequelize = require('sequelize');

const OpenedReview = require('./tables/openedReview');
const Report = require('./tables/report');
const Bookmark = require('./tables/bookmark');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

// Sequelize 인스턴스 생성
const sequelize = new Sequelize(
    config.database, 
    config.username, 
    config.password, 
    config
); 

db.sequelize = sequelize;
db.OpenedReview = OpenedReview;
db.Report = Report;
db.Bookmark = Bookmark;

OpenedReview.init(sequelize);
OpenedReview.associate(db);
Report.init(sequelize);
Report.associate(db);
Bookmark.init(sequelize);
Bookmark.associate(db);

module.exports = db;