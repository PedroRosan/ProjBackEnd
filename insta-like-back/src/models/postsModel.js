import 'dotenv/config';

// Importa ObjectId do MongoDB para manipular IDs
import { ObjectId } from "mongodb";
// Importa função de conexão com o banco de dados
import conectarAoBanco from "../config/dbConfig.js";

// Estabelece conexão com o banco de dados usando string de conexão do arquivo .env
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getAllPosts(){
    // Acessa o banco de dados chamado "imersaro-instabytes"
    const db = conexao.db("imersaro-instabytes");
    // Acessa a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção convertidos em array
    return colecao.find().toArray();
};

// Função assíncrona para criar um novo post
export async function createPost(newPost){
    // Acessa o banco de dados
    const db = conexao.db("imersaro-instabytes");
    // Acessa a coleção posts
    const colecao = db.collection("posts");
    // Insere um novo documento na coleção
    return colecao.insertOne(newPost);
};

// Função assíncrona para atualizar um post existente
export async function atualizarPost(id, postAtualizado){
    // Acessa o banco de dados
    const db = conexao.db("imersaro-instabytes");
    // Acessa a coleção posts
    const colecao = db.collection("posts");
    // Atualiza o documento com o ID especificado usando $set
    return colecao.updateOne({ _id: new ObjectId(id) }, { $set: postAtualizado });
};
