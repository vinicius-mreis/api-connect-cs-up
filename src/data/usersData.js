const { v4: uuidv4 } = require('uuid');

/**
 * Persistência de Dados Simulada (Array em memória)
 * Mantém a coleção inicial de usuários para testes locais durante a execução do processo.
 */
const users = [
  {
    id: uuidv4(),
    name: "Ana Silva",
    email: "ana.silva@example.com",
    role: "developer"
  },
  {
    id: uuidv4(),
    name: "Carlos Eduardo",
    email: "carlos.eduardo@example.com",
    role: "designer"
  }
];

module.exports = users;