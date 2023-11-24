const express = require('express');
const fs = require('fs');
const server = express();

server.get('/technical', (req, res) => {
    // Lendo o arquivo JSON com formatação
    const rawdata = fs.readFileSync('./src/data/Metadados_Tecnicos.json');
    const technical = JSON.parse(rawdata);

    // Enviando a resposta com formatação adequada
    res.json(technical);
});

server.listen(3001, () => {
    console.log('Servidor está funcionando...');
});
