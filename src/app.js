const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware global: Habilita o parse do corpo da requisição em formato JSON
app.use(express.json());

// Injeção do prefixo de rotas da API
app.use('/api/v1/users', userRoutes);

// Tratamento de rotas inexistentes (Status 404)
app.use(/(.*)/, (req, res) => {
  return res.status(404).json({
    status: 'fail',
    message: `A rota '${req.originalUrl}' não foi encontrada neste servidor.`
  });
});

module.exports = app;