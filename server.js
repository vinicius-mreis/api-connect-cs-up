const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 [API Connect] Servidor rodando na porta ${PORT}`);
  console.log(`📍 Endpoint base: http://localhost:${PORT}/api/v1/users`);
});