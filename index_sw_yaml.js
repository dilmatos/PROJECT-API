const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const fs = require('fs');
const yaml = require('js-yaml');

// Carregar o arquivo YAML com as informações do Swagger
const fileContents = fs.readFileSync('./src/data/sw_technical_metadata.yaml', 'utf8');
const swaggerDocument = yaml.load(fileContents); // Modificado para usar yaml.load

const app = express();
const port = 3030;

// Configurações do Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Technical Metadata',
      version: '1.0.0',
    },
  },
  // Paths para arquivos contendo definições OpenAPI
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

// Rota para a documentação do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Suas rotas e configurações de API aqui...

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
