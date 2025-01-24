const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Register new user
router.post('/register', authController.register);

// Login user
router.post('/login', authController.login);

// Get current user (must be logged in)
router.get('/me', authMiddleware, authController.getUser);

// Example protected route for SupplierManager
router.get('/manager', authMiddleware, roleMiddleware(['SupplierManager']), (req, res) => {
  res.send('Welcome, SupplierManager!');
});

module.exports = router;
