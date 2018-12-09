// Update with your config settings.
const path = require('path');
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname,'./dao/dev.sqlite')
    }
  }

};
