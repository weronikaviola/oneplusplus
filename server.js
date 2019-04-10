const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/api/users');
const profileRouter = require('./routes/api/profile');

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//all api routes here//
app.use(require('./config/auth'));
app.use('/api/users', userRouter);
app.use('/api/profiles', profileRouter);


///everything else here//
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => { console.log(`Express app running on port ${port}`) });