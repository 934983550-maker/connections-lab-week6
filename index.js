const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Aircraft database
const aircraft = [
  {
    id: 1,
    slug: "boeing-737-800",
    name: "Boeing 737-800",
    manufacturer: "Boeing",
    firstFlight: 1997,
    type: "Narrow-body Jet",
    seats: "162–189",
    range: 5765
  },
  {
    id: 2,
    slug: "airbus-a320-200",
    name: "Airbus A320-200",
    manufacturer: "Airbus",
    firstFlight: 1987,
    type: "Narrow-body Jet",
    seats: "150–180",
    range: 6150
  },
  {
    id: 3,
    slug: "boeing-777-300er",
    name: "Boeing 777-300ER",
    manufacturer: "Boeing",
    firstFlight: 2003,
    type: "Wide-body Jet",
    seats: "365–550",
    range: 13650
  },
  {
    id: 4,
    slug: "airbus-a350-900",
    name: "Airbus A350-900",
    manufacturer: "Airbus",
    firstFlight: 2013,
    type: "Wide-body Jet",
    seats: "300–350",
    range: 15000
  },
  {
    id: 5,
    slug: "boeing-787-9",
    name: "Boeing 787-9 Dreamliner",
    manufacturer: "Boeing",
    firstFlight: 2013,
    type: "Wide-body Jet",
    seats: "290–420",
    range: 14140
  },
  {
    id: 6,
    slug: "embraer-e190",
    name: "Embraer E190",
    manufacturer: "Embraer",
    firstFlight: 2004,
    type: "Regional Jet",
    seats: "98–114",
    range: 4537
  },
  {
    id: 7,
    slug: "bombardier-crj900",
    name: "Bombardier CRJ900",
    manufacturer: "Bombardier",
    firstFlight: 2001,
    type: "Regional Jet",
    seats: "76–90",
    range: 2500
  },
  {
    id: 8,
    slug: "airbus-a380-800",
    name: "Airbus A380-800",
    manufacturer: "Airbus",
    firstFlight: 2005,
    type: "Wide-body Jet",
    seats: "525 (typical 3-class)",
    range: 15200
  },
  {
    id: 9,
    slug: "boeing-747-8",
    name: "Boeing 747-8 Intercontinental",
    manufacturer: "Boeing",
    firstFlight: 2011,
    type: "Wide-body Jet",
    seats: "410–605",
    range: 14320
  },
  {
    id: 10,
    slug: "concorde",
    name: "Concorde",
    manufacturer: "Aérospatiale / BAC",
    firstFlight: 1969,
    type: "Supersonic Jet",
    seats: "92–128",
    range: 7222
  }
];

// Home page
app.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "public", "index.html")
  );
});

// Return all aircraft as JSON
app.get("/data", (request, response) => {
  response.json(aircraft);
});

// Return one aircraft by ID or slug
app.get("/data/:specialData", (request, response) => {
  const searchValue = request.params.specialData.toLowerCase();

  const plane = aircraft.find((item) => {
    return (
      item.id === Number(searchValue) ||
      item.slug === searchValue
    );
  });

  if (plane) {
    response.json(plane);
  } else {
    response.status(404).json({
      error: "Aircraft not found"
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
