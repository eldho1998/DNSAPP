const express = require('express');
const router = express.Router();
const menuControllers = require('../controllers/MenuController');

router.get('/', menuControllers.getMenus);
router.post('/', menuControllers.postMenu);

module.exports = router;
