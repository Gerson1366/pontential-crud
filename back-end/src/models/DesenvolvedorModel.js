import connection from "../api/connection.js"

let DesenvolvedorModel = {};

DesenvolvedorModel.getDevelopers = async (queries, unique) => {
  try {
    let query = getQuery(unique, queries);
    const [rows] = await connection.promise().query(query);
    return rows;
  } catch (e) {
    return false;
  }
}

DesenvolvedorModel.postDeveloper = async (data) => {
  try {
    const result = await connection.promise().query(`INSERT INTO desenvolvedor 
                    (nome, sexo, idade, hobby, datanascimento) 
                    VALUES (?,?,?,?,?)`, [data.nome, data.sexo, data.idade, data.hobby, data.datanascimento]);
    return true;
  } catch (e) {
    return false;
  }
}

DesenvolvedorModel.updateDeveloper = async (data, id) => {
  try {
    let query = getQueryUpdate(data, id);
    await connection.promise().query(query);
    return true;
  } catch (e) {
    return false;
  }
}

DesenvolvedorModel.deleteDeveloper = async (id) => {
  try {
    let query = `DELETE FROM desenvolvedor WHERE id=${id}`;
    await connection.promise().query(query);
    return true;
  } catch (e) {
    return false;
  }
}

export default DesenvolvedorModel;

function getQueryUpdate(data, id) {
  let query = `UPDATE desenvolvedor `;
  let primeira = true;
  for (let [data_index, data_value] of Object.entries(data)) {
    if (primeira) {
      query += ` SET `;
      primeira = false;
    } else {
      query += `, `;
    }
    query += `${data_index}='${data_value}' `;
  }
  query += `WHERE ID = ${id}`;
  return query;
}

function getQuery(unique, queries) {
  let query = `SELECT * FROM desenvolvedor`;
  if (unique === true) {
    query += ` WHERE id=${queries.id}`;
  } else {
    let primeira = true;
    for (let [query_index, query_data] of Object.entries(queries)) {
      if (primeira) {
        query += ` WHERE `;
        primeira = false;
      } else {
        query += ` AND `;
      }
      query += `${query_index}='${query_data}' `;
    }
  }
  return query;
}
