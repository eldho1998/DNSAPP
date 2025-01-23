const express = require('express');
const router = express.Router();
const itemControllers = require('../controllers/ItemController');

router.get('/', itemControllers.getItems);
router.post('/', itemControllers.postItem);

module.exports = router;
