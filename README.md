# API Connect – Gerenciamento de Usuários 🚀

> API RESTful desenvolvida durante a disciplina de **Desenvolvimento Back-end** do Curso de Ciência da Computação da UP. O projeto consiste na construção de um Produto Mínimo Viável (MVP) para gerenciamento de usuários de uma startup, aplicando padrões da arquitetura REST, tratamento de códigos de status HTTP e validação sistemática de payloads.

---

## 🛠️ Tecnologias Utilizadas

- **Ambiente de Execução:** [Node.js](https://nodejs.org/) (v18+)
- **Framework Web:** [Express.js](https://expressjs.com/) (v4)
- **Geração de Identificadores Únicos:** [UUID v4](https://www.npmjs.com/package/uuid)
- **Monitoramento e Dev Server:** [Nodemon](https://www.npmjs.com/package/nodemon)
- **Arquitetura:** Padrão modular em camadas (MVC Simplificado / Separation of Concerns)
- **Formato de Transmíssão de Dados:** JSON (`application/json`)

---

## 📁 Estrutura de Pastas e Arquivos

```text
api-connect-users/
├── src/
│   ├── controllers/
│   │   └── userController.js   # Lógica de negócios, validações e respostas JSON
│   ├── data/
│   │   └── usersData.js        # Camada de persistência simulada em memória
│   ├── routes/
│   │   └── userRoutes.js       # Mapeamento de rotas e associação a verbos HTTP
│   └── app.js                  # Instância do Express, middlewares globais e rotas 404
├── .gitignore                  # Regras de exclusão de arquivos para o Git
├── package.json                # Manifesto de dependências e scripts do Node.js
└── server.js                   # Bootstrapping e inicialização do servidor HTTP
```

## 🚦 Endpoints e Mapeamento de Rotas REST

Base URL: http://localhost:3000/api/v1/users

- GET / -> Listar todos | Status Sucesso: 200 OK | Status Erro: 500
- GET /:id -> Buscar por ID | Status Sucesso: 200 OK | Status Erro: 404 Not Found
- POST / -> Cadastrar usuário | Status Sucesso: 201 Created | Status Erro: 400 Bad Request
- PUT /:id -> Atualizar usuário | Status Sucesso: 200 OK | Status Erro: 400 / 404
- DELETE /:id -> Remover usuário | Status Sucesso: 204 No Content | Status Erro: 404 Not Found

---

## ⚙️ Como Executar o Projeto Localmente

1. Clonar este repositório:
   git clone https://github.com/SEU_USUARIO_GITHUB/api-connect-seu-nome-seu-sobrenome.git

2. Navegar até a pasta do projeto:
   cd api-connect-seu-nome-seu-sobrenome

3. Instalar as dependências:
   npm install

4. Iniciar o servidor em modo de desenvolvimento:
   npm run dev

5. Acessar a API:
   http://localhost:3000/api/v1/users

---

## 🧪 Exemplos de Requisição e Resposta

1. Criar Usuário com Sucesso (POST /api/v1/users)
Payload de Entrada:
{
  "name": "Mariana Costa",
  "email": "mariana.costa@example.com",
  "role": "developer"
}
Resposta (201 Created):
{
  "status": "success",
  "data": {
    "user": {
      "id": "7264e268-eed3-4991-a4d0-17961c9bd3dd",
      "name": "Mariana Costa",
      "email": "mariana.costa@example.com",
      "role": "developer"
    }
  }
}

2. Falha de Validação (POST /api/v1/users sem o campo e-mail)
Payload de Entrada:
{
  "name": "Mariana Costa"
}
Resposta (400 Bad Request):
{
  "status": "fail",
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados de entrada inválidos.",
    "details": [
      "O campo 'email' é obrigatório e deve ser um texto válido."
    ]
  }
}



================================================================================
SÍNTESE E REFLEXÃO FINAL DA EXPERIÊNCIA PRÁTICA II
================================================================================

A realização da Experiência Prática II proporcionou uma imersão completa no ciclo de desenvolvimento de uma API RESTful modularizada utilizando o ecossistema Node.js e o framework Express. Durante o projeto, foi possível consolidar a transição teórica para a aplicação prática dos conceitos de arquitetura orientada a serviços, separação de responsabilidades (SoC) e rigor semântico no uso do protocolo HTTP.

O desenvolvimento do Produto Mínimo Viável (MVP) permitiu compreender a relevância de isolar a camada de servidor (server.js), de configuração (app.js), de controle (userController.js), de roteamento (userRoutes.js) e de dados (usersData.js). Essa modularização demonstrou ser fundamental para a manutenção, legibilidade e testabilidade do sistema. A escolha do uso de UUIDs v4 para identificadores universais garantiu a consistência da persistência simulada sem gerar acoplamento a sequências numéricas locais.

A etapa de testes através do Postman evidenciou a importância de preparar a aplicação para cenários reais de borda. A implementação de validações para campos obrigatórios (400 Bad Request), o tratamento de recursos inexistentes (404 Not Found) e a padronização dos envelopes de resposta JSON garantiram a previsibilidade exigida para integração com equipes de front-end. 

Por fim, o versionamento com Git e a publicação no GitHub reforçaram as boas práticas de documentação via README.md, evidenciando que a construção de software profissional requer não apenas código funcional, mas também clareza na disponibilização da solução para a comunidade técnica.
