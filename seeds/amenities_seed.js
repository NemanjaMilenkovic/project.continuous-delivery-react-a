const allData = require("../data/locations");

//In CustomField

//sortOrder: 1 = Showers
//sortOrder: 2 = CAT Scales
//sortOrder: 3 = WiFi +
//sortOrder: 4 = ATM +
//sortOrder: 10 = Tire Care +
//sortOrder: 11 = Oil Change +
//sortOrder: 12 = Light mech +
//sortOrder: 13 = Tire Pass +

//async and promise.all

const coreData = allData.map((store) => {
  const insertInfo = {};

  insertInfo.location_id = store.Site.SiteId;

  insertInfo.wifi = store.CustomFields.find(
    (field) => field.CustomField.SortOrder === 3
  )
    ? true
    : false;

  insertInfo.atm = store.CustomFields.find(
    (field) => field.CustomField.SortOrder === 4
  )
    ? true
    : false;

  insertInfo.truck_tire_care = store.CustomFields.find(
    (field) => field.CustomField.SortOrder === 10
  )
    ? true
    : false;

  insertInfo.oil_change = store.CustomFields.find(
    (field) => field.CustomField.SortOrder === 11
  )
    ? true
    : false;

  insertInfo.light_mechanical = store.CustomFields.find(
    (field) => field.CustomField.SortOrder === 12
  )
    ? true
    : false;

  insertInfo.tire_pass = store.CustomFields.find(
    (field) => field.CustomField.SortOrder === 13
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
