import buildApp from "./app.js";
import db from "../models/DesenvolvedorModel.js";

let app = buildApp(db);

app.listen(45666, () => {
    console.log(`Example app listening at port 45666`);
});