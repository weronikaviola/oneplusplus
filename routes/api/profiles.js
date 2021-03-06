const express = require('express');
const router = express.Router();

const profileCtrl = require('../../controllers/profiles');
const authMiddleware = require('../../config/auth');

//auth middleware
router.use(authMiddleware);
//

router.get('/', profileCtrl.myProfile);
router.get('/all', profileCtrl.getAllFriends);
router.get('/users', profileCtrl.getUsers);
router.get('/:id', profileCtrl.getUserInfo);

router.post('/add', profileCtrl.addConnection);
router.post('/create', profileCtrl.create);




module.exports = router;