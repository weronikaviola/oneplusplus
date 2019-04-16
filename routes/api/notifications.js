const express = require('express');
const router = express.Router();

const notificationCtrl = require('../../controllers/notifications');
const authMiddleware = require('../../config/auth');

//auth middleware
router.use(authMiddleware);
//
router.get('/all', notificationCtrl.getAll);
router.post('/accept', notificationCtrl.accept);
router.post('/decline', notificationCtrl.decline);


module.exports = router;