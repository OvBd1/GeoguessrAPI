var map = L.map('map').setView([51.505, -0.09], 13);

var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});

CartoDB_Voyager.addTo(map);

var house = L.marker([48.763657, 1.950856]).addTo(map);

house.bindPopup("<b>My House</b>").openPopup();

var work = L.marker([48.784852, 2.042143]).addTo(map);

work.bindPopup("<b>My Work</b>").openPopup();

// var popup = L.popup()
//     .setLatLng([48.784852, 2.042143])
//     .setContent("I am a standalone popup.")
//     .openOn(map);

var addMarker = L.marker([0, 0]).addTo(map);

function onMapClick(e) {
    addMarker
        .setLatLng(e.latlng)
        .L.marker(e.latlng)
        .addTo(map);
}

map.on('click', onMapClick);