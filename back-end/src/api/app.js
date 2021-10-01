import "core-js/stable/index.js";
import "regenerator-runtime/runtime.js";
import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import cors from 'cors';
import routerDesenvolvedor from "../routes/DesenvolvedorRouter.js";

export default function (db) {
    const app = express();
    
    app.use(cors());
    app.use(express.json());

    app.use('/', routerDesenvolvedor(db));
    return app;
}
