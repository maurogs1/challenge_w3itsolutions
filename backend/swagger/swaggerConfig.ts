// src/swaggerConfig.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const configureSwagger = (app: any) => {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Nombre de tu API',
        version: '1.0.0',
        description: 'Descripción de tu API',
      },
    },
    apis: ['./src/routes/*.ts'],
  };

  const specs = swaggerJsdoc(options);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

export default configureSwagger;
