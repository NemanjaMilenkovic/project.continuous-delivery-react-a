const allData = require("../data/locations");

const coreData = allData.map((store) => {
  const insertInfo = {};
  insertInfo.oil_change = store.CustomFields.find(
    (field) => field.CustomField.SortOrder === 11
  )
    ? true
    : false;

  return insertInfo;
});

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("amenities")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("amenities").insert(coreData);
    });
};
