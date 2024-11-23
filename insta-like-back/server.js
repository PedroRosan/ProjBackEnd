// Importa o framework Express.js para criar o servidor web
import express from "express";
// Importa as rotas definidas no arquivo postsRoutes.js
import routes from "./src/routes/postsRoutes.js";

// Cria uma nova aplicação Express
const app = express();

// Configura uma rota estática para servir arquivos da pasta 'uploads'
app.use('/uploads', express.static('uploads'));

// Aplica as rotas importadas à aplicação
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    // Exibe mensagem no console quando o servidor inicia
    console.log("servidor escutando...");
});

