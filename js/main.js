jQuery(function($) {
	//ASYMCHRONOUSLY LOAD MAP API
	var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

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
		}
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}





