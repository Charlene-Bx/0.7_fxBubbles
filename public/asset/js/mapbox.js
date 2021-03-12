mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhcmxlbmVieCIsImEiOiJja200bGY4b3IwNXV2MnBxOHI2bGhyajB3In0.4vtTQSl_BuwdJi8mwijMQQ';
var map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/charlenebx/ckm4pnjxr1qcy17nwd0ok0jbh', // style URL
center: [4.351845171778504,50.82287384266428], // starting position [lng, lat]
zoom: 12 // starting zoom
});
var marker = new mapboxgl.Marker()
.setLngLat([4.351845171778504,50.82287384266428])
.addTo(map);