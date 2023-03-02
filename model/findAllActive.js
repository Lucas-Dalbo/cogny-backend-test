const { DATABASE_SCHEMA } = require('../config');
const { dbConnector } = require('../db');

async function findAllActive() {
  const db = await dbConnector();
  const result = await db[DATABASE_SCHEMA].api_data.find({
    is_active: true
  });
  console.log(result);
}

findAllActive();