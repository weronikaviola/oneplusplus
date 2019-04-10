const express = require('express');
const router = express.Router();

const profileCtrl = require('../../controllers/profile');

/*---protected routes---*/
router.get('/', profileCtrl.myProfile);
router.use(require('../../config/auth'));

module.exports = router;