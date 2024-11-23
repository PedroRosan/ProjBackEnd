// Importa módulos necessários
import express from 'express';
import multer from 'multer'; // Para upload de arquivos
import {listarPosts, criarPost, uploadImagem, updatePost} from "../controllers/postsController.js";
import cors from 'cors'; // Para permitir requisições cross-origin

// Configuração do CORS - Define origem permitida e status de sucesso
const corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200
};

// Configuração do armazenamento do Multer para uploads
const storage = multer.diskStorage({
  // Define pasta de destino dos uploads
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  // Define nome do arquivo uploadado
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});

// Configura middleware Multer com a pasta de destino e configurações de storage
const upload = multer({ dest: "./uploads" , storage});
// Versão alternativa para Linux/Mac
// const upload = multer({ dest: "./uploads" });

// Função principal para configurar rotas
const routes = (app) => {
  // Configura middleware para processar JSON nas requisições
    app.use(express.json());
    // Aplica configurações CORS
    app.use(cors(corsOptions));

  // Define rotas da API:
    app.get('/posts', listarPosts);        // GET - Lista todos os posts
    app.post('/posts', criarPost);         // POST - Cria novo post
    app.post('/upload', upload.single("imagem"), uploadImagem);  // POST - Upload de imagem
    app.put('/upload/:id', updatePost);     // PUT - Atualiza post existente
}

export default routes;
