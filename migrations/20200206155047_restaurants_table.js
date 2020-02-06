exports.up = function(knex) {
  return knex.schema.createTable("restaurants", (table) => {
    table
      .increments()
      .index()
      .primary();

    table.text("store_id");

    table.text("name");
    table.text("icon");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("restaurants");
};
