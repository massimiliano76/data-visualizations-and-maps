const southWest = L.latLng(-89.98155760646617, -225)
const northEast = L.latLng(89.99346179538875, 225)
const bounds = L.latLngBounds(southWest, northEast)

let mymap = L.map('mapid', 
{
  maxBounds: bounds,
  center: bounds.getCenter(),
  maxBoundsViscosity: 1.0
}
).setView([51.505, -0.09], 2)

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 2,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapBoxAccessToken,
    preferCanvas: true
  }
).addTo(mymap)

let markersLayer = new L.LayerGroup()
let circlesLayer = new L.LayerGroup()

mapDataPoints.forEach(function (point, index) {
  const marker = L.marker([point.latitude, point.longitude]).addTo(mymap)
  const popupContent = `
    <b>${point.province_or_state} ${point.country_or_region}</b><br>
    <b>Confirmed Cases</b>: ${point.confirmed}<br>
    <b>Deaths</b>: ${point.deaths}
  `
  const popupLocation = new L.LatLng(Number(point.latitude), Number(point.longitude))
  const popup = new L.Popup({
    autoClose:false,
    closeOnEscapeKey: false,
    autoPan: false,
    closeOnClick: false
  })
  popup.setContent(popupContent)
  popup.setLatLng(popupLocation)
  marker.bindPopup(popup)
  
  const circleMarker = L.circleMarker(
    [point.latitude, point.longitude],
    {
      color: getPointColor(point.confirmed),
      radius: 4
    }
  ).addTo(mymap)
  
  markersLayer.addLayer(marker)
  circlesLayer.addLayer(circleMarker)
})

let allMarkersOnMap = []

markersLayer.eachLayer(function(l) {
  if(l instanceof L.Marker && mymap.getBounds().contains(l.getLatLng())) {
    allMarkersOnMap.push(l)
  }
})

function getMarkersInView () {
  let contained = []
  
  markersLayer.eachLayer(function(l) {
    if(l instanceof L.Marker && mymap.getBounds().contains(l.getLatLng())) {
      contained.push(l)
    }
  })
  
  return contained
}

function resetAllMarkerPopUps (all) {
  all.forEach(function (marker) {
    marker.closePopup()
  })
}

mymap.on('zoomend', function () {
  zoomMarkers(mymap)
})

mymap.on('moveend', function () {
  moveMarkers(mymap)
})

zoomMarkers(mymap)

// You must first add the layer on load for it to remove the markers!!!
mymap.addLayer(markersLayer)
mymap.removeLayer(markersLayer)

function moveMarkers (mymap) {
  if (mymap.getZoom() > 4) {
    getMarkersInView().forEach(function (marker) {
      if (marker.getPopup().isOpen() === false) {
        marker.openPopup()
      }
    })
  }
}

function zoomMarkers (mymap) {
  if (mymap.getZoom() < 5) {
    mymap.removeLayer(markersLayer)
    resetAllMarkerPopUps(allMarkersOnMap)
  } else {
    mymap.addLayer(markersLayer)
    resetAllMarkerPopUps(allMarkersOnMap)
    getMarkersInView().forEach(function (marker) {
      marker.openPopup()
    })
  }
}
