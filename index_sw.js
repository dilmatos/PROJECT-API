require("dotenv").config
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

//const swaggerDocument = require('./src/data/swagger.json'); // ou './swagger.yaml' se for um arquivo json
const swaggerDocument = require('./src/data/sw_technical_metadata.json'); // ou './swagger.yaml' se for um arquivo json
const server = express();
const app = express();
const port = 3030;

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Technical Metadata',
        version: '1.0.0',
      },
    },
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.js'],
  };

  const specs = swaggerJsdoc(options);
// Rota para a documentação do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Suas rotas e configurações de API aqui...

app.listen(process.env.PORT || port, () => {
    console.log(`Servidor está rodando na porta ${process.env.PORT || port}`);
});

