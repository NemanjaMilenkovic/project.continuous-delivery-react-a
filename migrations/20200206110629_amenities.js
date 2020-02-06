exports.up = function(knex) {
  return knex.schema.createTable("amenities", (table) => {
    table
      .increments()
      .index()
      .primary();
    table.text("location_id");
    table.text("wifi");
    table.text("atm");
    table.text("truck_tire_care");
    table.text("oil_change");
    table.text("light_mechanical");
    table.text("tire_pass");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("amenities");
};
