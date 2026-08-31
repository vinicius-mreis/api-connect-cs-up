const { v4: uuidv4 } = require('uuid');
let users = require('../data/usersData');

/**
 * GET /api/v1/users
 * Retorna a lista completa de usuários cadastrados na memória.
 */
const getAllUsers = (req, res) => {
  return res.status(200).json({
    status: 'success',
    results: users.length,
    data: { users }
  });
};

/**
 * GET /api/v1/users/:id
 * Localiza e retorna um usuário específico pelo ID informado na URL.
 */
const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: `Usuário com o ID '${id}' não foi encontrado.`
    });
  }

  return res.status(200).json({
    status: 'success',
    data: { user }
  });
};

/**
 * POST /api/v1/users
 * Cadastra um novo usuário com validação de payload e geração de ID via UUID v4.
 */
const createUser = (req, res) => {
  const { name, email, role } = req.body;

  // 1. Validação de presença do corpo da requisição
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      status: 'fail',
      error: {
        code: 'MISSING_PAYLOAD',
        message: 'O corpo da requisição não pode estar vazio.'
      }
    });
  }

  // 2. Validação dos campos obrigatórios
  const errors = [];

  if (!name || typeof name !== 'string' || name.trim() === '') {
    errors.push("O campo 'name' é obrigatório e deve ser um texto válido.");
  }

  if (!email || typeof email !== 'string' || email.trim() === '') {
    errors.push("O campo 'email' é obrigatório e deve ser um texto válido.");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("O campo 'email' deve conter um endereço de e-mail válido.");
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({
      status: 'fail',
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Dados de entrada inválidos.',
        details: errors
      }
    });
  }

  // 3. Criação do registro
  const newUser = {
    id: uuidv4(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    role: role && typeof role === 'string' ? role.trim() : 'user'
  };

  users.push(newUser);

  // 4. Resposta de sucesso (Status 201 Created)
  return res.status(201).json({
    status: 'success',
    data: { user: newUser }
  });
};

/**
 * PUT /api/v1/users/:id
 * Atualiza os dados de um usuário existente com base no ID da URL.
 */
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: `Usuário com o ID '${id}' não foi encontrado.`
    });
  }

  if (!name && !email && !role) {
    return res.status(400).json({
      status: 'fail',
      message: "Forneça ao menos um campo ('name', 'email' ou 'role') para atualizar."
    });
  }

  users[userIndex] = {
    ...users[userIndex],
    ...(name && { name: name.trim() }),
    ...(email && { email: email.trim().toLowerCase() }),
    ...(role && { role: role.trim() })
  };

  return res.status(200).json({
    status: 'success',
    data: { user: users[userIndex] }
  });
};

/**
 * DELETE /api/v1/users/:id
 * Remove um usuário da memória com base no ID da URL.
 */
const deleteUser = (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: `Usuário com o ID '${id}' não foi encontrado.`
    });
  }

  users.splice(userIndex, 1);

  // Status 204 No Content
  return res.status(204).send();
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};