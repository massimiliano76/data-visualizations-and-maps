# Data Visualizations and Maps

**This repository is just a learning tool, it is not something to be 
deployed or put in production.**

## Before you start anything

There are enough existing visualizations online on COVID-19 already. Please
don't add more unless you can maintain it well.

## Getting Started

Add your mapbox access token to `maps\leaftlet\private\mapbox-access-token.js`.

Open `maps\leaftlet\index.html`.

## To Do

- Add choose primary location. Save to localstorage.
  - Add affected, recovered and deaths data.

## Sources

Sources and references are in the presentation.

Data was taken from here in March:

https://github.com/CSSEGISandData

## Notes

- The map tiles, images of (usually) 256 x 256 pixels each.

- The data in 03-21-2020.csv.txt is problematic see: "Korea, South".
It should separate using semicolons instead of commas.

- There is something wrong with US, US (more recovered cases than confirmed).

## Leaflet

https://leafletjs.com/plugins.html

## OpenLayers

https://openlayers.org/

## mapbox

https://docs.mapbox.com/help/troubleshooting/how-to-use-mapbox-securely/

## Google Maps Platform

https://cloud.google.com/maps-platform/pricing

## Chart.js

https://www.chartjs.org/