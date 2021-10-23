

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

var stations = []
var battery = []
var hydrogen = []
 for(let index = 0; index < 146; index++){  
   if(data["Technology"][index] == "battery"){
      battery.push(L.circleMarker([data["Latitude"][index], data["Longitude"][index]]).bindPopup(data["COUNTY"][index]))
   }

   if(data["Technology"][index] == "hydrogen"){
      hydrogen.push(L.marker([data["Latitude"][index], data["Longitude"][index]]).bindPopup(data["COUNTY"][index]))
   } 
    
 };

 batteryLayers = L.layerGroup(battery);
 hydrogenLayers = L.layerGroup(hydrogen)
 var overlayMaps = {
  "Battery Charging Stations": batteryLayers,
  "Hydrogen Fueling Stations": hydrogenLayers
};

var myMap = L.map("mapid", {
  center: [
    36.7783, -119.4179    
  ],
  zoom: 5,
  layers: [streetmap, batteryLayers, hydrogenLayers]
});


L.control.layers(baseMaps, overlayMaps, {collapsed: false})
.addTo(myMap);

  