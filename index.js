const express =  require('express');
const server = express();
const metadatav = require('./src/data/technicalMetadata.json');
const technical = require('./src/data/Metadados_Tecnicos.json')
server.get('/metadatav', (req,res) => {
    return res.json(metadatav)
})


server.get('/technical', (req,res) => {
    return res.json(technical)
})

server.listen(3001, () => {
    console.log('Servidor está funcionando...')
});