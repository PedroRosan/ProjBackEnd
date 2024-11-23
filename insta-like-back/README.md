InstaBytes Backend
Serviço backend para o projeto InstaBytes, responsável por gerenciar upload de imagens e gerar descrições automáticas de imagens utilizando a API Gemini da Google.

Pré-requisitos
Antes de iniciar o projeto, você precisará ter:

Node.js (versão 14.0.0 ou superior).
Uma conta no MongoDB Atlas.
Um projeto no Google Cloud Platform com a API Gemini ativada.
Configuração do Projeto
1. Clone o Repositório
Baixe o código do repositório localmente:

git clone https://github.com/seu-usuario/InstaBytes-Backend.git
cd InstaBytes-Backend
2. Instale as Dependências
Execute o seguinte comando no terminal para instalar as dependências:

npm install
3. Configure os Arquivos Necessários
Crie o arquivo .env
Na raiz do projeto, crie um arquivo chamado .env e adicione as seguintes variáveis:

STRING_CONEXAO=sua_string_de_conexao_mongodb
GEMINI_API_KEY=sua_chave_api_gemini
Estrutura de Diretórios
Certifique-se de criar o diretório uploads/ na raiz do projeto para armazenar as imagens enviadas:

InstaBytes-Backend/
├── uploads/      # Diretório para imagens enviadas
└── restante dos arquivos do projeto

Como Configurar as Chaves e Serviços Necessários
1. MongoDB Atlas
Crie uma conta no MongoDB Atlas.
Configure um novo cluster.
Obtenha a string de conexão do cluster.
Adicione essa string ao arquivo .env como STRING_CONEXAO.

2. API Gemini do Google
Crie um projeto no Google Cloud Console.
Ative a API Gemini no projeto.
Gere as credenciais da API e copie a chave de API.
Adicione essa chave ao arquivo .env como GEMINI_API_KEY.

Executando o Projeto
Inicie o servidor de desenvolvimento com o comando:

npm run dev

O servidor estará disponível em: http://localhost:3000.

Endpoints da API
1. Posts
GET /posts: Lista todas as postagens.
POST /posts: Cria uma nova postagem.
2. Upload de Imagens
POST /upload: Faz upload de uma imagem.
PUT /upload/:id: Atualiza uma postagem com uma nova imagem.
Variáveis de Ambiente
Certifique-se de criar um arquivo .env com as seguintes variáveis:

STRING_CONEXAO: String de conexão do MongoDB Atlas.
GEMINI_API_KEY: Chave da API Gemini do Google.
Serviços Utilizados
MongoDB Atlas: Banco de dados na nuvem.
API Gemini do Google: Geração de descrições automáticas para imagens.
Google Cloud Run (opcional): Implantação do backend.
Arquivos para Adicionar ao .gitignore
Certifique-se de que os seguintes arquivos e pastas não sejam adicionados ao controle de versão:

node_modules/
.env
uploads/
