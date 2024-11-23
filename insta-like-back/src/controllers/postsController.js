// Importa funções do modelo de posts e módulos necessários
import {getAllPosts, createPost, atualizarPost} from "../models/postsModel.js";
import fs from "fs"; // Módulo para manipulação de arquivos
import gerarDescricaoComGemini from "../services/geminiService.js";

// Função assíncrona para listar todos os posts
export async function listarPosts(req, res) {
    // Aguarda buscar todos os posts do banco
    const posts = await getAllPosts();
    // Retorna os posts em formato JSON com status 200 (sucesso)
    res.status(200).json(posts);
};

// Função assíncrona para criar um novo post
export async function criarPost(req, res) {
    // Obtém dados do novo post do corpo da requisição
    const newPosts = req.body;
    try {
        // Tenta criar o post no banco de dados
        const createdPost = await createPost(newPosts);
        // Retorna o post criado com status 201 (criado)
        res.status(201).json(createdPost);
    } catch (error) {
        // Em caso de erro, registra no console
        console.error(error.message);
        // Retorna erro 500 com mensagem
        res.status(500).json({ "error": "Erro ao criar um novo post" });
    }
};

// Função assíncrona para fazer upload de imagem
export async function uploadImagem(req, res) {
    // Cria objeto com dados iniciais do post
    const newPosts = {
        descricao: "",
        imagem: req.file.originalname,
        alt: ""
    };
    try {
        // Cria post no banco com os dados da imagem
        const createdPost = await createPost(newPosts);
        // Define novo nome do arquivo com ID do post
        const imgAtualizada = `uploads/${createdPost.insertedId}.png`;
        // Renomeia arquivo para novo nome
        fs.renameSync(req.file.path, imgAtualizada);
        // Retorna resposta de sucesso com o post criado
        res.status(201).json(createdPost);
    } catch (error) {
        // Em caso de erro, registra a mensagem no console
        console.error(error.message);
        // Retorna erro 500 com mensagem amigável
        res.status(500).json({ "error": "Erro ao criar um novo post" });
    }
};

// Função assíncrona para atualizar um post existente
export async function updatePost(req, res) {
    // Obtém o ID do post dos parâmetros da URL
    const id = req.params.id;
    // Constrói a URL completa da imagem usando o ID
    const urlImage = `http://localhost:3000/uploads/${id}.png`;

    try {
        // Lê o arquivo de imagem do disco
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
        // Gera descrição da imagem usando IA do Gemini
        const descricao = await gerarDescricaoComGemini(imageBuffer);

        // Cria objeto com dados atualizados do post
        const postAtualizado = {
            imgUrl: urlImage,
            descricao: descricao,
            alt: req.body.alt
        };

        // Atualiza o post no banco de dados
        const updatedPost = await atualizarPost(id, postAtualizado);
        // Retorna o post atualizado com status 200 (sucesso)
        res.status(200).json(updatedPost);
    } catch (error) {
        // Em caso de erro, registra no console
        console.error(error.message);
        // Retorna erro 500 com mensagem
        res.status(500).json({ "error": "Erro ao atualizar o post" });
    }
}
