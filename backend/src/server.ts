import express from 'express';
import { corsConfig } from './config/cors';
import cors from 'cors';
import morgan from 'morgan';


const app = express();

app.use(cors(corsConfig))
app.use(morgan('dev'))

app.use(express.json())

//routes

export default app