import DesenvolvedorController from "../controllers/DesenvolvedorController.js";
import express from 'express';

export default function (db) {
    const app = express();
    const controller = DesenvolvedorController(db);
    
    app.get('/developers', controller.getDevelopers);
    app.post('/developers', controller.postDeveloper);

    return app
}