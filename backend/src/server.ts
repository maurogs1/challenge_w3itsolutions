// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectToDatabase } from '../database/config';
import countryRouter from './routes/country.routes';
import configureSwagger from '../swagger/swaggerConfig';

const app = express();
const port = 8080;

dotenv.config();

app.use(cors());
app.use('/countries', countryRouter);

configureSwagger(app); // config de swagger

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

connectToDatabase();

export { server, app };
