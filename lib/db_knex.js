const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'development',
    password : 'development',
    database : 'vagrant'
  },
  migration: {
    tablename: 'migrations'
  }
});
