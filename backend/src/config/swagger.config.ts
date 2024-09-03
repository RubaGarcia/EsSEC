import swaggerJSDoc, { SwaggerUiOptions } from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Mi API',
    version: '1.0.0',
    description: 'Documentación de la API',
  },
  servers: [
    {
      url: 'http://localhost:4000',
      description: 'Servidor backend de EsSEC',
    },
  ],
};


const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'REST API-Calls',
                description: 'API Calls'
            }
        ], 
        info: {
            title: 'EsSEC REST API ',
            version: "1.0.0",
            description: "API Docs for Products"
        }
    }, 
    apis: ['./src/routes/*.ts']	
}

const swaggerSpec = swaggerJSDoc(options)


const swaggerUiOptions : SwaggerUiOptions = {
    customCss : `
        .topbar-wrapper .link {
            content: url('https://codigoconjuan.com/wp-content/themes/cursosjuan/img/logo.svg');
            height: 80px;
            width: auto;
        }
        .swagger-ui .topbar {
            background-color: #2b3b45;
        }
    `,
    customSiteTitle: 'Documentación REST API Express / TypeScript'
}

export default swaggerSpec
export {
    swaggerUiOptions
}
