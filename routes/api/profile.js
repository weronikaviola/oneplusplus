const express = require('express');
const router = express.Router();

const profileCtrl = require('../../controllers/profile');

/*---protected routes---*/
router.get('/:id', profileCtrl.myProfile);

router.use(require('../../config/auth'));
router.get('/:id/all', profileCtrl.getConnections);
router.post('/:id/create', profileCtrl.create);

module.exports = router;