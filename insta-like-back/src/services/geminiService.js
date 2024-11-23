// Importa a biblioteca oficial do Google Generative AI
import { GoogleGenerativeAI } from '@google/generative-ai';

// Inicializa o cliente da API Gemini usando a chave de API das variáveis de ambiente
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// Seleciona o modelo específico 'gemini-1.5-flash' para uso
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Função principal que gera descrição de imagem usando IA
export default async function gerarDescricaoComGemini(imageBuffer) {
    // Define o prompt em português para a IA
    const prompt =
    'Gere uma descrição em português do brasil para a seguinte imagem';

    try {
        // Prepara o objeto de imagem no formato base64
        const image = {
            inlineData: {
                data: imageBuffer.toString('base64'),
                mimeType: 'image/png',
            },
        };
        // Envia prompt e imagem para o modelo e aguarda resposta
        const res = await model.generateContent([prompt, image]);
        // Retorna o texto gerado ou mensagem padrão se vazio
        return res.response.text() || 'Alt-text não disponível.';
    } catch (erro) {
        // Registra erros no console
        console.error('Erro ao obter alt-text:', erro.message, erro);
        // Lança erro com mensagem amigável
        throw new Error('Erro ao obter o alt-text do Gemini.');
    }
}
