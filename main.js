const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const {sequelize} = require('./database/models/');
sequelize.sync({force : false});

const bookmarkRouter = require ('./routers/bookmarkRouter.js');
const openedReviewRouter = require ('./routers/openedReviewRouter.js');
const reportRouter = require('./routers/reportRouter.js');

const receiveOpenedReviewQueue = require('./rabbit_opened_review.js');
receiveOpenedReviewQueue.receiveConnection();

app.use('/db/bookmark', bookmarkRouter);
app.use('/db/openedReview', openedReviewRouter);
app.use('/db/report', reportRouter);

app.listen(port, () => {
  console.log(`Sub DB app listening on port ${port}`)
})