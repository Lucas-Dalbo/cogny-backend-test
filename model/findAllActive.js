const { DATABASE_SCHEMA } = require('../config');

async function findAllActive(db) {
  const result = await db[DATABASE_SCHEMA].api_data.find({
    is_active: true,
    and: [{
      "api_name": "teste-cogny",
    }]
  });

  return result;
}

module.exports = { findAllActive };
