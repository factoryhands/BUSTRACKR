function initialize() {
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(37.09024, -95.712891),
    streetViewControl: false,
    styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":
    		[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":
    		[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#262E2F"}]},{"featureType":"road","elementType":"geometry","stylers":
    		[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":
    		[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":
    		[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#B1C3CE"}]}]
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); NYMarker(); MexicoMarker();}

//ADD MARKER TO THE PAGE
function addMarker(location) {
	marker = new google.maps.Marker({
		position: location,
		map: map,
	});
}

function NYMarker () {
	NYBus = new google.maps.LatLng(40.72153, -74.00037);
	addMarker(NYBus);
}

function MexicoMarker () {
	MexicoBus = new google.maps.LatLng(32.5250, 117.0333);
	addMarker(MexicoBus);
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;