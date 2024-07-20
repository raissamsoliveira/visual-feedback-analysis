const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Configura o diretório público para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Endpoint para listar arquivos JSON
app.get('/output', (req, res) => {
    const outputDir = path.join(__dirname, '../output');
    fs.readdir(outputDir, (err, files) => {
        if (err) {
            return res.status(500).send('Erro ao ler diretório');
        }
        const jsonFiles = files.filter(file => file.endsWith('.json'));
        res.json(jsonFiles);
    });
});

// Endpoint para servir arquivos JSON específicos
app.get('/output/:filename', (req, res) => {
    const filePath = path.join(__dirname, '../output', req.params.filename);
    res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
