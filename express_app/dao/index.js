const path = require('path');
var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname,'./dev.sqlite')
    }
});


module.exports = knex;