mapboxgl.accessToken = 'pk.eyJ1IjoicmFkbGV5Y2llZ28iLCJhIjoiY2w3N3h6em8zMDRiNzNvc3pycnBhZHN2cSJ9.CEfyZztRlIDdXxbcLHjhHw';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-73.86543,40.837048], // starting position [lng, lat]
    zoom: 12 // starting zoom
});