const { DATABASE_SCHEMA, DATABASE_URL, SHOW_PG_MONITOR } = require('../config');
const monitor = require('pg-monitor');
const massive = require('massive');

async function dbConnector () {
  const db = await massive({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  }, {
    // Massive Configuration
    scripts: process.cwd() + '/migration',
    allowedSchemas: [DATABASE_SCHEMA],
    whitelist: [`${DATABASE_SCHEMA}.%`],
    excludeFunctions: true,
  }, {
    // Driver Configuration
    noWarnings: true,
    error: function (err, client) {
        console.log(err);
        //process.emit('uncaughtException', err);
        //throw err;
    }
  });

  if (!monitor.isAttached() && SHOW_PG_MONITOR === 'true') {
    monitor.attach(db.driverConfig);
  }

  return db;
}

module.exports = { dbConnector };