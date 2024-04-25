const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const {sequelize} = require('./database/models/');
sequelize.sync({force : false});

const reportRouter = require('./routers/reportRouter.js');

app.use('/db/report', reportRouter);

app.listen(port, () => {
  console.log(`Report DB app listening on port ${port}`)
})