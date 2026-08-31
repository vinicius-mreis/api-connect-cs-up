const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Mapeamento para o endpoint base (/api/v1/users)
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

// Mapeamento para o endpoint parametrizado (/api/v1/users/:id)
router
  .route('/:id')
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;