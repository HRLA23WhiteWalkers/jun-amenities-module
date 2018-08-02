const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routers');
const connection = require('../database/index');

const app = express();

const PORT = 3012;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/api', router);

app.listen(PORT);
console.log(`Juns Module API Connected On PORT: ${PORT}`);
