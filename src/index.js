const path = require('path');
import mapboxgl from 'mapbox-gl';
import {buildMarker} from './marker';
console.log('SUCCESSFULLY LOADED');

let activity = 'http://i.imgur.com/WbMOfMl.png';
let hotel = 'http://i.imgur.com/D9574Cu.png';
let restaurant = 'http://i.imgur.com/cqR6pUI.png';
let coords = [-74.009151, 40.705086];

const iconURLS = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  activity: "http://i.imgur.com/WbMOfMl.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png"
}



console.log(buildMarker)
//this our container to connect
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


// map.addTo()
let hotelMarker = buildMarker(iconURLS.activity, coords);
hotelMarker.addTo(map);
