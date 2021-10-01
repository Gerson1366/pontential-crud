import connection from "../api/connection.js"

let DesenvolvedorModel = {};

DesenvolvedorModel.getDevelopers = async () => {
  const [rows] = await connection.promise().query(`SELECT * FROM desenvolvedor`);
  await connection.end();
  return rows[0];
}

DesenvolvedorModel.postDeveloper = async (data) => {
  try{
    const result = await connection.promise().query(`INSERT INTO desenvolvedor 
                    (nome, sexo, idade, hobby, datanascimento) 
                    VALUES (?,?,?,?,?)`,[data.nome, data.sexo, data.idade, data.hobby, data.datanascimento]);
    await connection.end();
    return true;
  }catch(e){
    return false;
  }
}

export default DesenvolvedorModel;