# 🌄 Caminho da Fé – API

API RESTful desenvolvida em **Node.js + Express + Sequelize**, criada para gerenciar pousadas, ramais, atributos e métodos de pagamento do projeto **Caminho da Fé**.

---

## ⚙️ Tecnologias
- Node.js 18+
- Express
- Sequelize (ORM)
- MySQL
- Dotenv
- CORS

---

## 📂 Estrutura do Projeto
```
api/
 ├── controllers/
 │    ├── pousadaController.js
 │    ├── ramalController.js
 │    ├── attributeController.js
 │    └── paymentMethodController.js
 ├── models/
 │    ├── pousadaModel.js
 │    ├── ramalModel.js
 │    ├── attributeModel.js
 │    ├── paymentMethodModel.js
 │    ├── usuarioModel.js
 │    └── index.js
 ├── routes/
 │    ├── pousadaRoutes.js
 │    ├── ramalRoutes.js
 │    ├── attributeRoutes.js
 │    └── paymentMethodRoutes.js
 ├── database/
 │    └── db.js
 ├── app.js
 └── server.js
```

---

## 🚀 Instalação e Execução
```bash
git clone https://github.com/Eduardo-Junior/Caminho_da_F-.git
cd Caminho_da_F-/api
npm install
cp .envExample .env
# edite o .env com as credenciais do seu banco
npm start
```
A API será executada em `http://localhost:3000`.

---

## 🔐 Variáveis de Ambiente
Exemplo de `.env`:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=senha
DB_NAME=caminho_da_fe
DB_DIALECT=mysql
PORT=3000
```

---

## 📘 Modelos de Dados

### 🏠 Pousada
Representa uma pousada cadastrada ao longo do Caminho da Fé.

| Campo | Tipo | Obrigatório | Descrição |
|--------|------|--------------|------------|
| id | INTEGER | ✅ | Identificador único (auto incremento). |
| nome | STRING(200) | ✅ | Nome da pousada. |
| cidade | STRING(100) | ✅ | Cidade onde está localizada. |
| estado | STRING(100) | ✅ | Estado da pousada. |
| endereco | STRING(200) | ✅ | Endereço completo. |
| tipo | STRING(100) | ✅ | Tipo da pousada (ex: “Particular”, “Igreja”, “Hotel”). |
| contato | STRING(100) | ✅ | Telefone ou e-mail de contato principal. |
| nomeContato | STRING(100) | ✅ | Nome do responsável ou recepcionista. |
| custoMin | FLOAT | ❌ | Custo mínimo aproximado da diária (em R$). |
| possuiCredencial | BOOLEAN | ✅ | Indica se aceita a credencial do peregrino. |
| kmRef | FLOAT | ✅ | Quilometragem de referência no trajeto. |
| ramalId | INTEGER (FK) | ✅ | Referência para o Ramal ao qual pertence. |

**Relacionamentos**
- belongsTo: `Ramal`
- belongsToMany: `Atributos` (via `PousadaAtributos`)
- belongsToMany: `Pagamentos` (via `PousadaPagamentos`)

---

### 📞 Ramal
Representa uma subdivisão regional do caminho (ex: trecho ou cidade de referência).

| Campo | Tipo | Obrigatório | Descrição |
|--------|------|--------------|------------|
| id | INTEGER | ✅ | Identificador único (auto incremento). |
| cityRegion | STRING | ✅ | Nome da cidade ou região representada. |

**Relacionamentos**
- hasMany: `Pousadas` (um ramal possui várias pousadas)

---

### 🏷️ Atributos
Define as características ou comodidades disponíveis nas pousadas.

| Campo | Tipo | Obrigatório | Descrição |
|--------|------|--------------|------------|
| id | INTEGER | ✅ | Identificador único (auto incremento). |
| name | STRING(200) | ✅ | Nome do atributo (ex: “Wi-Fi”, “Estacionamento”). |

**Relacionamentos**
- belongsToMany: `Pousadas` (via `PousadaAtributos`)

---

### 💳 Pagamentos
Métodos de pagamento aceitos pelas pousadas.

| Campo | Tipo | Obrigatório | Descrição |
|--------|------|--------------|------------|
| id | INTEGER | ✅ | Identificador único (auto incremento). |
| name | STRING(200) | ✅ | Nome do método de pagamento (ex: “Pix”, “Cartão”). |

**Relacionamentos**
- belongsToMany: `Pousadas` (via `PousadaPagamentos`)

---

### 👤 Usuário
Representa usuários do sistema (uso futuro para login/autenticação).

| Campo | Tipo | Obrigatório | Descrição |
|--------|------|--------------|------------|
| id | INTEGER | ✅ | Identificador único (auto incremento). |
| email | STRING(150) | ✅ | E-mail único de acesso. |
| password | STRING(100) | ✅ | Senha criptografada do usuário. |

---

## 🔄 Resumo de Relacionamentos

| Entidade | Tipo | Relacionamento | Com |
|-----------|------|----------------|------|
| Ramal | 1:N | → | Pousada |
| Pousada | N:1 | → | Ramal |
| Pousada | N:N | ↔ | Atributos |
| Pousada | N:N | ↔ | Pagamentos |
| Atributos | N:N | ↔ | Pousadas |
| Pagamentos | N:N | ↔ | Pousadas |

---

## ⚠️ Tratamento de Erros
A API retorna erros padronizados:
```json
{
  "error": "Erro ao criar pousada"
}
```
Status comuns:
- 400 – Requisição inválida
- 404 – Não encontrado
- 500 – Erro interno do servidor

---

## 📜 Licença
Este projeto está sob a licença **MIT**.
