require('dotenv').config();
module.exports = {
  "development": {
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": "5432",
    "dialect": "postgresql"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "babar.db.elephantsql.com",
    "port": "5432",
    "dialect": "postgresql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "babar.db.elephantsql.com",
    "port": "5432",
    "dialect": "postgresql"
  }
};

