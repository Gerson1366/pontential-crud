export default function (db) {
    let DesenvolvedorController = {};

    DesenvolvedorController.getDevelopers = async (req, res) => {
        try{
            let queries = req.query;
            let getUnique = false;
            if(req.params.id){
                queries.id = req.params.id;
                getUnique = true;
            }
            let developers = await db.getDevelopers(queries, getUnique);
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

    DesenvolvedorController.putDeveloper = async (req, res) =>{
        try{
            let body = req.body;
            let id = req.params.id;
            if(id>0){
                db.updateDeveloper(body,id);
                res.status(200).send("Desenvolvedor atualizado com sucesso!");
            }else{
                res.status(400).send("Não informado id corretamente.");
            }
        }catch(e){
            res.status(500).send("Aconteceu um erro na requisição.")
        } 
    }

    DesenvolvedorController.deleteDeveloper = async (req,res) => {
        try{
            let id = req.params.id;
            if(id>0){
                db.deleteDeveloper(id);
                res.status(200).send("Desenvolvedor deletado com sucesso!");
            }else{
                res.status(400).send("Não informado id corretamente.");
            }
        }catch(e){
            res.status(500).send("Aconteceu um erro na requisição.")
        } 
    }

    return DesenvolvedorController;
}
