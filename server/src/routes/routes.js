const express = require('express');
const router = express.Router();
const index = require('../controllers/index.controller');
const categories = require('../controllers/categories.controller');

router.get('/', index);

router.use('/api', categories);

module.exports = router;