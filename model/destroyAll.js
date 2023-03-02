const { DATABASE_SCHEMA } = require('../config');
const { dbConnector } = require('../db');


async function destroyAll() {
  const db = await dbConnector();
  const result = await db[DATABASE_SCHEMA].api_data.destroy({
    is_active: true
  });
  console.log(result);
}

destroyAll();
