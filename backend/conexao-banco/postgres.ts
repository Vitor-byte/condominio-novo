const { Client } = require("pg");
require('dotenv').config()
const client = new Client({
    user: process.env.DB_HOST,
    host: process.env.DB_USER,
    database: process.env.DB_DATA,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    connectionTimeoutMillis:0
  });
  client.connect();

 export{client};

