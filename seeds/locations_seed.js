const allData = require("../data/locations");

const coreData = allData.map((store) => {
  const insertInfo = {};
  insertInfo.latitude = store.Site.Latitude;
  insertInfo.longitude = store.Site.Longitude;
  insertInfo.name = store.Addresses[0].Name;

  insertInfo.state = store.Addresses[0].State;
  insertInfo.city = store.Addresses[0].City;
  insertInfo.highway = store.Site.Highway;
  insertInfo.exit_number = store.Site.ExitNumber;

  insertInfo.zip_code = store.Addresses[0].Zip;
  insertInfo.store_id = store.Site.SiteId;

  insertInfo.type = store.FacilitySubtype.Name;

  insertInfo.tel = store.ContactMethods.find(
    (method) => method.ContactMethodTypeId === 1
  ).Data;

  return insertInfo;
});

exports.seed = function(knex) {
  return knex("locations")
    .del()
    .then(() => {
      return knex("locations").insert(coreData);
    });
};
