const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();

const awsConfig = require('./config/aws');

require('dotenv').config();
require('./config/database');

//socketio settings
const http = require('http').Server(app);
require('./io').init(http);

const userRouter = require('./routes/api/users');
const profileRouter = require('./routes/api/profiles');
const notificationRouter = require('./routes/api/notifications');

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//all api routes here//


app.post('/file-upload', awsConfig.upload);
app.use('/api/users', userRouter);

app.use(require('./config/auth'));
app.use('/api/notifications', notificationRouter);
app.use('/api/profiles', profileRouter);


///everything else here//
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

http.listen(port, () => { console.log(`Running on port ${port}`) });