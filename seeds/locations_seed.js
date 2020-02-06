const allData = require("../data/locations");

const coreData = allData.map((store) => {
  const insertInfo = {};
  insertInfo.latitude = store.Site.Latitude;
  insertInfo.longitude = store.Site.Longitude;
  insertInfo.name = store.Addresses[0].Name;

  return insertInfo;
});

exports.seed = function(knex) {
  return knex("locations")
    .del()
    .then(() => {
      return knex("locations").insert(coreData);
    });
};
