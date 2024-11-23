<div align="left" style="position: relative;">
<img src="https://img.icons8.com/?size=512&id=55494&format=png" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>InstaBytes Backend</h1>
<p align="left">
	<em><code>❯ Serviço backend para gerenciar upload e descrição automática de imagens.</code></em>
</p>
<p align="left">
	<!-- Shields.io badges disabled, using skill icons. --></p>
<p align="left">Built with the tools and technologies:</p>
<p align="left">
	<a href="https://skillicons.dev">
		<img src="https://skillicons.dev/icons?i=nodejs,mongodb,gcp,postman&theme=light">
	</a></p>
</div>
<br clear="right">

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#-usage)
  - [🧪 Testing](#-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

Serviço backend para o projeto **InstaBytes**, responsável por gerenciar uploads de imagens e gerar descrições automáticas utilizando a API Gemini do Google. As funcionalidades foram testadas e validadas utilizando o **Postman**, garantindo a integridade dos endpoints e da lógica de negócio.

---

## 👾 Features

- Upload de imagens.
- Geração automática de descrições de imagens com a API Gemini do Google.
- Atualização de postagens utilizando o método PUT.
- Integração com MongoDB Atlas para armazenamento de dados.

---

## 📁 Project Structure

```sh
└── InstaBytes-Backend/
    ├── .env
    ├── .gitignore
    ├── README.md
    ├── package.json
    ├── package-lock.json
    ├── server.js
    ├── uploads/
    └── src/
        ├── config/
        ├── controllers/
        ├── models/
        ├── routes/
        └── services/
```

---

## 🚀 Getting Started

### ☑️ Prerequisites

Antes de começar, certifique-se de que seu ambiente atende aos seguintes requisitos:

- **Node.js:** Versão 14.0.0 ou superior.
- **MongoDB Atlas:** Conta e cluster configurados.
- **Google Cloud Platform:** Projeto com a API Gemini ativada.

### ⚙️ Installation

Siga os passos abaixo para instalar o projeto:

1. Clone o repositório:
```sh
git clone https://github.com/seu-usuario/InstaBytes-Backend.git
cd InstaBytes-Backend
```

2. Instale as dependências:
```sh
npm install
```

3. Configure o arquivo `.env` com as variáveis:
```env
STRING_CONEXAO=sua_string_de_conexao_mongodb
GEMINI_API_KEY=sua_chave_api_gemini
```

> **Nota:** Para que o projeto funcione corretamente, é essencial configurar o arquivo `.env` com a chave da API Gemini (`GEMINI_API_KEY`) e a string de conexão do MongoDB Atlas (`STRING_CONEXAO`). Sem essas informações, o backend não conseguirá se comunicar com a API e o banco de dados.

### 🤖 Usage

1. Execute o servidor localmente:
```sh
npm run dev
```

2. Use o Postman para testar os endpoints. Para atualizar imagens, utilize o endpoint:
   - **PUT /upload/:id** com o corpo da requisição contendo o novo arquivo de imagem.

### 🧪 Testing

Para testar o projeto, use o comando:
```sh
npm test
```

---

## 📌 Project Roadmap

- [X] Implementação do upload de imagens.
- [X] Integração com API Gemini.
- [ ] Melhorias na interface de resposta da API.

---

## 🔰 Contributing

Contribuições são bem-vindas! Siga as diretrizes padrão para forks, commits e pull requests.

---

## 🙌 Acknowledgments

- **MongoDB Atlas:** Banco de dados na nuvem.
- **Google Cloud Platform:** Suporte à API Gemini.
- **Postman:** Teste e validação de endpoints.

---

