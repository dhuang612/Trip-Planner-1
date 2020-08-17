import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = "pk.eyJ1IjoiZGh1YW5nNjEyIiwiYSI6ImNrMHNqZDBlMzAxbGczcHNra2U1ZGEzY2oifQ.qpDA_dt5OqeoLkQquzWD_A";

/*
let activity = 'http://i.imgur.com/WbMOfMl.png';
let hotel = 'http://i.imgur.com/D9574Cu.png';
let restaurant = 'http://i.imgur.com/cqR6pUI.png';
*/


//url(http://i.imgur.com/WbMOfMl.png)
//coords is an array
export const buildMarker = (markerType, coords)=>{

  const newEl = document.createElement("DIV");
  newEl.style.width= "32px";
  newEl.style.height ="39px";
  newEl.style.backgroundImage = `url(${markerType})`;
 return new mapboxgl.Marker(newEl).setLngLat(coords);
}
