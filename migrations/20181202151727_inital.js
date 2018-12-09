
exports.up = function (knex, Promise) {
    return Promise.all(
        [
            knex.schema.createTable('users', function (t) {
                t.increments('id');
                t.string('name');
                t.string('address');
                t.integer('age');
                t.timestamps();
            })
        
        ]
    )
};

exports.down = function (knex, Promise) {
    return Promise.all(
        [
            knex.schema.dropTable('users')
        ]
    );
};
