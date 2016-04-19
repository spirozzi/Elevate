/*
sockethandler.js adds WebSocket connection handling and WebSocket data 
transfer handling to the main exported Express app's socket.io instance, 
'sockio'.
*/

// Imports

// get access to all index.js exports
var mainapp = require('../index');
// get a reference to the Express app's socket.io instance
var socketio = mainapp.sockio;

// Set up connection handler and event handlers for WebSockets
socketio.on('connection', function(socket) {
	// Event handlers for sockets
	socket.on('send-data', function(data) {
		var msg = data.msg;
		console.log('WebSocket message: ' + msg);
	});
});
