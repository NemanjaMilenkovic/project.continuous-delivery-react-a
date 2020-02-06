// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");

const app = express();

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/locations", async (req, res) => {
  try {
    const locations = await db.select().table("locations");
    res.json(locations);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

//GET all names
app.get("/api/names", async (req, res) => {
  try {
    const locationNames = await db.select("name").from("locations");
    res.json(locationNames);
  } catch (err) {
    console.err("Error loading location names", err);
    res.sendStatus(500);
  }
});

//GET name of specific location by id [Test]
app.get("/api/locations/:id/names", async (req, res) => {
  try {
    const locationName = await db
      .select("name")
      .from("locations")
      .where({ id: req.params.id });

    res.send(locationName[0].name);
  } catch (err) {
    console.err("Cannot find that location name", err);
    res.sendStatus(500);
  }
});

//GET latitude and longitude of specific location by id [Test]
app.get("/api/locations/:id/latlong", async (req, res) => {
  try {
    const locationLoc = await db
      .select("latitude", "longitude")
      .from("locations")
      .where({ id: req.params.id });

    res.send(locationLoc);
  } catch (err) {
    console.err("Cannot find that location location", err);
    res.sendStatus(500);
  }
});

app.get("/api/locations/:latlong", async (req, res) => {
  const locationLat = await db
    .select("name")
    .from("locations")
    .where({ latitude: req.params.latlong });

  res.send(locationLat);
});

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
