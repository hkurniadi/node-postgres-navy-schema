const db = require('./db');

module.exports = {
  getPersonByName: (callback, name) => {
    db.connect((err, client) => {
      client.query("SELECT * FROM famous_people WHERE first_name = $1::text OR last_name = $1::text", [name], (err, results) => {
        if (err) {
          return console.error("error running query", err);
        }
        callback(results.rows, name);
        db.close(client);
      });
    });
  }
}
