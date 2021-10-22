

var streetmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  id: 'mapbox/streets-v11',
	accessToken: API_KEY
});

var darkmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  id: 'mapbox/dark-v10',
	accessToken: API_KEY
});

var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

//   var LeafIcon = L.Icon.extend({
//     options: {
//         shadowUrl: 'leaf-shadow.png',
//         iconSize:     [38, 95],
//         shadowSize:   [50, 64],
//         iconAnchor:   [22, 94],
//         shadowAnchor: [4, 62],
//         popupAnchor:  [-3, -76]
//     }
// });

// var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'})
// var redIcon = new LeafIcon({iconUrl: 'leaf-red.png'})

var stations = []
var battery = []
var hydrogen = []
 for(let index = 0; index < 146; index++){
   stations.push(L.marker([data["Latitude"][index], data["Longitude"][index]]).bindPopup(data["COUNTY"][index]))
   if(data["Technology"][index] == "battery"){
      battery.push(L.circle([data["Latitude"][index], data["Longitude"][index]]).bindPopup(data["COUNTY"][index]))
   }

   if(data["Technology"][index] == "hydrogen"){
      hydrogen.push(L.circle([data["Latitude"][index], data["Longitude"][index]]).bindPopup(data["COUNTY"][index]))
   } 
    
 };

 stationLayers = L.layerGroup(stations)
 batteryLayers = L.layerGroup(battery);
 hydrogenLayers = L.layerGroup(hydrogen)
 var overlayMaps = {
  "All Stations": stationLayers,
  "Battery Charging Stations": batteryLayers,
  "Hydrogen Fueling Stations": hydrogenLayers
};

var myMap = L.map("mapid", {
  center: [
    36.7783, -119.4179    
  ],
  zoom: 5,
  layers: [streetmap]
});


L.control.layers(baseMaps, overlayMaps, {collapsed: false})
.addTo(myMap);

  