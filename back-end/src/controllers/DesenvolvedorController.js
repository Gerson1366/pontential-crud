export default function (db) {
    let DesenvolvedorController = {};

    DesenvolvedorController.getDevelopers = async (req, res) => {
        try{
            let developers = db.getDevelopers();
            res.status(200).send(developers);
        }catch(e){
            res.status(500).send("Aconteceu um erro na requisição.")
        }
        
    };

    DesenvolvedorController.postDeveloper = async (req, res) => {
        try{
            let body = req.body;
            if(body.nome && body.sexo && body.idade && body.hobby && body.datanascimento){
                db.postDeveloper(body);
                res.status(200).send("Desenvolvedor adicionado com sucesso!");
            }else{
                res.status(400).send("Requisição mal formatada.");
            }
        }catch(e){
            res.status(500).send("Aconteceu um erro na requisição.")
        }  
    }

    return DesenvolvedorController;
}
