exports.up = function(knex) {
  return knex.schema.createTable("amenities", (table) => {
    table.increments().index();
    table.integer("location_id");
    table
      .foreign("location_id")
      .references("id")
      .inTable("locations");

    table.text("atm");
    table.text("wifi");
    table.text("oil_change");
    table.text("light_mechanical");
    table.text("tire_pass");
    table.text("truck_tire_care");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("amenities");
};
