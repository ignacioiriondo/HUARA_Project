require('dotenv').config();

module.exports= {
  "development": {
    "username": process.env.DB_USER,
    "password": null,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "huara_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "261355",
    "password": "Pantera#1990",
    "database": "ignacio-iriondo_huaradb",
    "host": "mysql-ignacio-iriondo.alwaysdata.net",
    "dialect": "mysql",
    
  }
}
