const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
router.post('/users', userController.user_create);
// router.get('/users', userController.user_fetch);

module.exports = router;