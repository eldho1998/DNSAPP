const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/UserController');

router.get('/', userControllers.getUser);
router.get('/:id', userControllers.getUserById);

module.exports = router;
