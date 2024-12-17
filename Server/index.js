import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import defaultData from './default.js';
import Router from './routers/router.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Router);

const PORT = 3001;

Connection();

app.listen(PORT, () =>
    console.log(`Server running succesfully on..... ${PORT}`)
);

defaultData();