import request from 'supertest'
import buildApp from "../api/app.js";
import db from "../models/DesenvolvedorModel.js";
require('mysql2/node_modules/iconv-lite').encodingExists('foo');

let app = buildApp(db);

jest.useRealTimers();

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
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe("Desenvolvedor adicionado com sucesso!");
        });
    })

})

describe("GET /developers ", () => {

    describe("quando buscar desenvolvedores", () => {
        test("deve responder com status 200", async () => {
            const response = await request(app).get("/developers");
            expect(response.statusCode).toBe(200)
        });
    });

    describe("quando buscar por nome", () => {
        test("deve responder com status 200 e array vazio", async () => {
            const response = await request(app).get("/developers/"+0);
            expect(response.statusCode).toBe(200)
            expect(response.body.length).toBe(0);
        });
    });

});

describe("DELETE /developers ", () => {
    describe("quando conectar no banco", () => {
        test("deve responder com status 200 e mensagem de sucesso", async () => {
            let response = await request(app).get("/developers");
            let id = response.body[0].id;
            response = await request(app).delete("/developers/"+id);
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe("Desenvolvedor deletado com sucesso!");
        });
    });
});