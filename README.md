# Projeto de Gestão de Autores e Livros

Este é um projeto de API RESTful para gerenciar autores e seus respectivos livros, utilizando Node.js, Express, Sequelize e MySQL.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL (mysql2)
- Dotenv

## Configuração do Projeto

### Pré-requisitos

- Node.js instalado
- MySQL instalado e configurado

### Instalação

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/marcosacritica/Api_Livraria
   cd seu-repositorio
Instale as dependências:

bash

npm install
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

env

DB_HOST=seu_host
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
Execute as migrações do banco de dados:

bash
Copiar código
npx sequelize db:migrate
Executando o Projeto
Para iniciar o servidor, execute o comando:

bash

npm start
O servidor estará disponível em http://localhost:5300.

Endpoints
Autores
GET /authors: Retorna todos os autores, incluindo seus livros.
GET /authors/
: Retorna um autor específico pelo ID, incluindo seus livros.
POST /authors: Cria um novo autor.
PUT /authors/
: Atualiza um autor existente pelo ID.
DELETE /authors/
: Exclui um autor pelo ID.
Estrutura do Projeto
plaintext

.
├── controllers
│   └── authorController.js
├── models
│   ├── Author.js
│   ├── Book.js
│   └── index.js
├── migrations
│   ├── 20210618000000-create-author.js
│   └── 20210618000001-create-book.js
├── routes
│   └── index.js
├── .env
├── package.json
└── README.md
Exemplos de Requisições
Criar um novo autor
bash

curl -X POST http://localhost:3000/authors -H "Content-Type: application/json" -d '{"name": "Nome do Autor"}'
Atualizar um autor existente
bash

curl -X PUT http://localhost:3000/authors/1 -H "Content-Type: application/json" -d '{"name": "Nome Atualizado do Autor"}'
Excluir um autor
bash

curl -X DELETE http://localhost:3000/authors/1
Contribuições
Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request.

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
