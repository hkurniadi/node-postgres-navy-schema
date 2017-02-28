const pg = require('pg');
const settings = require('../config/settings')

const config = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
};

module.exports = {
  connect: (callback) => {
    const client = new pg.Client(config);
    client.connect((err) => {
      if (err) {
        throw err;
      }
      callback(err, client);
    });
  },

  close: (client) => {
    client.end((err) => {
      if (err) {
        throw err;
      }
    });
  }
}
