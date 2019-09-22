
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('leagues').del()
    .then(function () {
      // Inserts seed entries
      return knex('leagues').insert([
        {id: 1, name: 'NHL'},
      ]);
    });
};
