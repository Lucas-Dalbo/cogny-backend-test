const { DATABASE_SCHEMA } = require('../config');
const axios = require('axios');
const { dbConnector } = require('../db');

async function fetchData() {
  try {
    const result = await axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
    const { data } = result;
    const jsonData = JSON.stringify(data.data)

    const db = await dbConnector();
    await db[DATABASE_SCHEMA].api_data.insert({
      api_name: "teste-cogny",
      doc_record: { "data": jsonData },
    });
  } catch(e) {
    console.log("O seguinte erro ocorreu:");
    console.log(e);
  }
}

fetchData();
