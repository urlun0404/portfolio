// map
const mapCenter = [25.0169, 121.5385];
const mapInitialZoom = 16;
let map = L.map("map").setView(mapCenter, mapInitialZoom);
const layer = new L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
);
L.marker(mapCenter, {
  title: "我在這!",
  opacity: 0.9,
}).addTo(map);
map.addLayer(layer);
