const allData = require("../data/locations");
//id 1 is Subway
//id 4 is Arbys
//id 9 is Chesters

const coreData = allData.map((store) => {
  const insertInfo = {};

  insertInfo.store_id = store.Site.SiteId;

  insertInfo.name = store.Site.Concepts.map((restaurants) => {
    return restaurants.Concept.Name;
  });

  insertInfo.icon = store.Site.Concepts.map((restaurants) => {
    return restaurants.Concept.ConceptIcon;
  });

  return insertInfo;
});

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("restaurants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("restaurants").insert(coreData);
    });
};

/*
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, colName: "rowValue1" },
        { id: 2, colName: "rowValue2" },
        { id: 3, colName: "rowValue3" },
      ]);
    });
};
*/
