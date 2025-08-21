const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
      description: "API documentation for your Sequelize CRUD app",
    },
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            username: { type: "string", example: "johndoe" },
            password: { type: "string", example: "secret123" },
            created_at: { type: "string", format: "date-time" },
            updated_at: { type: "string", format: "date-time" },
          },
        },
        UserInput: {
          type: "object",
          required: ["username", "password"],
          properties: {
            username: { type: "string", example: "janedoe" },
            password: { type: "string", example: "mypassword" },
          },
        },
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}/api`,
      },
    ],
  },

  apis: ["./app/routes/**/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
