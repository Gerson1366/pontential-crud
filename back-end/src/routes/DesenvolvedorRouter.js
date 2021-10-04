import DesenvolvedorController from "../controllers/DesenvolvedorController.js";
import express from 'express';

export default function (db) {
    const app = express();
    const controller = DesenvolvedorController(db);
    
    app.get('/developers/:id?', controller.getDevelopers);
    app.post('/developers', controller.postDeveloper);
    app.put('/developers/:id',controller.putDeveloper);
    app.delete('/developers/:id',controller.deleteDeveloper);

    return app
}