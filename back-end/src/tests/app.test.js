import request from 'supertest'
import buildApp from "../api/app.js";
import db from "../models/DesenvolvedorModel.js";
require('mysql2/node_modules/iconv-lite').encodingExists('foo');

let app = buildApp(db);

jest.useFakeTimers();

describe("POST /developers", () => {

    describe("quando enviar dados completos ao banco", () => {
        test("deve responder com status 200", async () => {
            const data = {
                "nome":"Gerson Carneiro de Souza",
                "sexo":"M",
                "idade":32,
                "hobby":"tecnologia",
                "datanascimento":"1989-02-06"
            }
            const response = await request(app).post("/developers").send(data);
            console.log(response)
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe("Desenvolvedor adicionado com sucesso!");
        });
    })

})

describe("GET /developers ", () => {

    describe("quando conectar no banco", () => {
        test("deve responder com status 200", async () => {
            const response = await request(app).get("/developers");
            expect(response.statusCode).toBe(200)
        });
    })

});