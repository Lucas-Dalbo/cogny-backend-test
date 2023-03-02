const { DATABASE_SCHEMA } = require('../config');


async function findTesteCogny(db) {
  const result = await db[DATABASE_SCHEMA].api_data.findOne({
    is_active: true,
    and: [{
      "api_name": "teste-cogny",
    }]
  });

  return result;
}

module.exports = { findTesteCogny };
