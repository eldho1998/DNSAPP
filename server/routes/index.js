const express = require('express');
const router = express.Router();
const menuRoutes = require('./MenuRoutes');
const itemRoutes = require('./ItemRoutes');

router.use('/menu', menuRoutes);
router.use('/item', itemRoutes)

module.exports = router;
