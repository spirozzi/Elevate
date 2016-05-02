$(document).ready(function() {
	// Global Variables

	// chosen elev trend, changed by elev radio buttons, default to "FLAT"
	var elev_trend = 'FLAT';
	// Set up WebSocket connection with server
	var socket = io.connect('http://localhost:3000');

	// Register WebSocket event handlers

	// receives the requested elevation-optimized routes
	socket.on('receive-routes-success', function (data) {
		// parse routes
		// draw top ranked route on map, display details
		// list other routes on sidebar
	}

	// true or false sent from server if route request succeeds or fails
	socket.on('receive-routes-failure', function (data) {
		if (data.status === false) {
			alert('Failed to find routes, please try again.');
		}
	});

	// jQuery Event Handlers

	// register radio button form handler
	$('#postnowform').submit(function(event) {
		var trend = $("input[type='radio'][name='trendoption']:checked").val();
		// socket.emit('request-routes', { elev: elev_trend });
		event.preventDefault();
	});
});
