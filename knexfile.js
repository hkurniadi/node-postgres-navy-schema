// Update with your config settings.
const settings = require('./config/settings');

module.exports = {
  development: {
    client: 'pg',
    connection: settings
  }
};
