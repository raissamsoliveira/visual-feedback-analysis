const fs = require('fs');
const path = require('path');
const Tesseract = require('tesseract.js');
const Sentiment = require('sentiment');

// Função para processar imagens e extrair texto
async function extractTextFromImage(imagePath) {
    try {
        const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');
        return text;
    } catch (error) {
        console.error('Erro ao extrair texto:', error);
        return '';
    }
}

// Função para analisar o sentimento do texto
function analyzeSentiment(text) {
    const sentiment = new Sentiment();
    return sentiment.analyze(text);
}

// Função principal para processar imagens e gerar resultados
async function processFiles(inputDir, outputDir) {
    if (!fs.existsSync(inputDir)) {
        console.error(`Diretório de entrada não encontrado: ${inputDir}`);
        return;
    }

    const files = fs.readdirSync(inputDir);

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    for (const file of files) {
        const filePath = path.join(inputDir, file);
        const outputFilePath = path.join(outputDir, file.replace(/\.(jpg|png)$/, '.json'));

        if (file.endsWith('.jpg') || file.endsWith('.png')) {
            const text = await extractTextFromImage(filePath);

            if (text) {
                const sentimentResult = analyzeSentiment(text);
                fs.writeFileSync(outputFilePath, JSON.stringify(sentimentResult, null, 2));
                console.log(`Processado ${file}: Sentimento analisado e salvo em ${outputFilePath}`);
            }
        }
    }
}

// Executar o processamento
const inputDir = path.join(__dirname, '../inputs');
const outputDir = path.join(__dirname, '../output');

processFiles(inputDir, outputDir);