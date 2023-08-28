import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { routes } from './routes/index.js';
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.listen(process.env.PORT)
