const express = require('express');
const router = express.Router();
const categories = require('../controllers/categories.controller');

router.get('/categories', categories);

module.exports = router;
