const express = require('express');
const router = express.Router();

const userCtrl = require('../../controllers/users');


/*---- public routes ----*/
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

/*---- protected routes -----*/


module.exports = router;
