require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "postgres://iwmjxitl:CpMoygXyjUi77Ar292vCTNX5OmtdNLZy@babar.db.elephantsql.com/iwmjxitl",
    "port": "5432",
    "dialect": "postgresql"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "postgres://iwmjxitl:CpMoygXyjUi77Ar292vCTNX5OmtdNLZy@babar.db.elephantsql.com/iwmjxitl",
    "port": "5432",
    "dialect": "postgresql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "postgres://iwmjxitl:CpMoygXyjUi77Ar292vCTNX5OmtdNLZy@babar.db.elephantsql.com/iwmjxitl",
    "port": "5432",
    "dialect": "postgresql"
  }
};

