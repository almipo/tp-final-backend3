import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from "./routes/mocks.router.js";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const app = express();

// Configuración de Swagger

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Documentación de la API',
      },
    },
    apis: ['./src/routes/*.js'],
  };
  
  const swaggerSpec = swaggerJSDoc(swaggerOptions);
  
  // Agregar la ruta de Swagger en la aplicación
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb+srv://dbCoderhouse:NLM2y7934nNeeZfL@cluster1.adgsu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`)

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use("/api/mocks", mocksRouter);


app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
export default app;