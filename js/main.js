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
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	// Multiple Markers
    var markers = [
        ['NEW YORK, NY', 40.7127, 74.0059],
        ['MEXICO, ', 32.5250, 117.0333]
    ];

	// Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });

};


