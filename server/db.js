var pgp = require("pg-promise");

const db = pgp(process.env.DB_CONNECT_STRING);

module.exports = db;