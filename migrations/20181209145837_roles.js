
exports.up = function (knex, Promise) {
    return Promise.all(
        [
            knex.schema.createTable('roles', function (t) {
                t.increments('id');
                t.string('name');
                t.timestamps();
            }),
            knex.schema.createTable('user_role_mapping', function (t) {
                t.increments('id');
                t.integer('user_id');
                t.integer('role_id');
                t.boolean('active');
                t.timestamps();
                t.foreign('user_id').references('users.id');
                t.foreign('role_id').references('roles.id');
            }),

        
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
