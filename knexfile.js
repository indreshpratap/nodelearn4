// Update with your config settings.
const path = require('path');
module.exports = {

  development: {
    client: 'sqlite3',
    debug:true,
    connection: {
      filename: path.resolve(__dirname,'./dao/dev.sqlite')
    }
  }

};
