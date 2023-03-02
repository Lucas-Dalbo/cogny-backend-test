const { DATABASE_SCHEMA } = require('../config');
const axios = require('axios');

async function fetchDataToDB(db) {
  try {
    const result = await axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
    const { data } = result;
    const jsonData = JSON.stringify(data.data)

    await db[DATABASE_SCHEMA].api_data.insert({
      api_name: "teste-cogny",
      doc_record: jsonData,
    });

    return "Dados salvos com sucesso";
  } catch(e) {
    console.log("O seguinte erro ocorreu:");
    console.log(e);
  }
}

module.exports = { fetchDataToDB };
