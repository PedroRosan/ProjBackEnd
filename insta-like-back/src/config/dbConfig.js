// Importa o cliente MongoDB para conexão com o banco de dados
import { MongoClient } from 'mongodb';

// Função assíncrona que estabelece conexão com o MongoDB usando uma string de conexão
export default async function conectarAoBanco(stringConexao) {
    // Declara variável para armazenar a instância do cliente MongoDB
    let mongoClient;

    try {
        // Cria nova instância do cliente MongoDB com a string de conexão fornecida
        mongoClient = new MongoClient(stringConexao);
        // Exibe mensagem indicando tentativa de conexão
        console.log('Conectando ao cluster do banco de dados...');
        // Aguarda a conexão ser estabelecida
        await mongoClient.connect();
        // Exibe mensagem de sucesso na conexão
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        // Retorna o cliente MongoDB conectado
        return mongoClient;
    } catch (erro) {
        // Em caso de erro, exibe mensagem de falha com detalhes do erro
        console.error('Falha na conexão com o banco!', erro);
        // Encerra a aplicação em caso de falha na conexão
        process.exit();
    }
}
